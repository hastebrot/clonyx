## onyx-htmx

**setup:**

- `❯ git clone https://github.com/hastebrot/clonyx`
- `❯ cd clonyx/onyx-htmx/`

**usage:**

- `❯ cd onyx-htmx/`
- `❯ go run .`
- `❯ open -a safari --url "http://localhost:6010/"`
- `❯ gow -c run .`
- `❯ gow -c test .`

---

**initial setup:**

go module

- `❯ go mod init github.com/hastebrot/clonyx`
- `❯ go get github.com/maragudk/gomponents`
- `❯ go get github.com/maragudk/gomponents-htmx`

gow watcher

- `❯ go install github.com/mitranim/gow@latest`

svg icons

- `❯ go get -u github.com/maragudk/gomponents-heroicons/v2@v2`
- `❯ go get -u github.com/hastebrot/gomponents-lucide`

go testing

- `❯ go get -u github.com/maragudk/is`
- `❯ go get -u github.com/andybalholm/cascadia`
- `❯ go get -u github.com/google/go-cmp`
- `❯ go get -u golang.org/x/net`

http proxy

- `❯ forwarder run --proxy http://localhost:6010 --log-level error --address :6011`
- docs: https://forwarder-proxy.io/cli/forwarder_run/
- github: https://github.com/saucelabs/forwarder
