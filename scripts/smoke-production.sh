#!/usr/bin/env bash
set -euo pipefail

# Exercise the actual production server, not the development server.
PORT=3217 npm run start -- --hostname 127.0.0.1 > /tmp/majeste-smoke.log 2>&1 &
server_pid=$!
trap 'kill "$server_pid" 2>/dev/null || true' EXIT

ready=0
for attempt in $(seq 1 40); do
  if curl --silent --fail http://127.0.0.1:3217/ -o /dev/null; then
    ready=1
    break
  fi
  if ! kill -0 "$server_pid" 2>/dev/null; then
    cat /tmp/majeste-smoke.log
    echo "Production server exited unexpectedly" >&2
    exit 1
  fi
  sleep 1
done

if [ "$ready" -ne 1 ]; then
  cat /tmp/majeste-smoke.log
  echo "Production server did not become ready" >&2
  exit 1
fi

check_route() {
  local path="$1" expected="$2" marker="$3" body status
  body=$(mktemp)
  status=$(curl --silent --show-error --location --output "$body" --write-out '%{http_code}' "http://127.0.0.1:3217$path")
  if [ "$status" != "$expected" ]; then
    echo "FAIL $path: expected HTTP $expected, got $status" >&2
    rm -f "$body"
    exit 1
  fi
  if [ -n "$marker" ] && ! grep -Fqi "$marker" "$body"; then
    echo "FAIL $path: missing expected page content: $marker" >&2
    rm -f "$body"
    exit 1
  fi
  echo "PASS $path: HTTP $status"
  rm -f "$body"
}

check_route / 200 "distinction"
check_route /collections 200 "collection"
check_route /collections/sovereign 200 "Sovereign"
check_route /collections/sovereign/personalize 200 "Make it"
check_route /studio 200 "STUDIO"
check_route /guest-preview 200 "Amina"
check_route /experience 200 "experience"
check_route /inquire 200 "inquire"
check_route /journal 200 "journal"
check_route /collections/not-a-real-collection 404 ""
echo "Production route smoke tests passed."
