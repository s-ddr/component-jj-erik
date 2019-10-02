# Product Carousel Back-End System Design

![Image of application](https://i.imgur.com/tHZjtfQ.png)


## Description

Generated and seeded a Mongo and Postgres database with 10M realistic records to simulate a real use case.
Optimized queries to both databases from 25s to 5ms by adding custom indexes.
Implemented an Express server image on EC2 to allow ease of reuse when scaling horizontally.
Stress tested in development using Artillery and then in production using loader.io, and then used New Relic to analyze the results and troubleshoot bottlenecks.
Load balanced between 4 instances of my service using the least connected method of an nginx server
that increased RPS from 500 to 3.75k with a median of 120ms response and <1% error rate.


## Related Projects

  - https://github.com/unclesam-hr/component-jj - Repo this started from

## Setup
