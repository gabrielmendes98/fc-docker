FROM golang:1.16-buster AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY *.go ./

RUN go build -o /hello-world

# Deploy
FROM scratch

WORKDIR /

COPY --from=build /hello-world /hello-world

EXPOSE 8080

ENTRYPOINT ["/hello-world"]