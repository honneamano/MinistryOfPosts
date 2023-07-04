Ministry of Posts
=================

The Honneamano project is organized analogical to an old kingdom, where most
complex jobs are coordinated across a few microservices. Each microservice is
named like a "government agency".

The Ministry of Posts, is responsible for all server to server
("international") and client to server ("national") message deliveries.

## Responsibilities

1. Receive and forward messages in actors' postal boxes (in/outboxes).
2. Provides WebFinger lookup for remote servers, and answer queries from
   remote servers.