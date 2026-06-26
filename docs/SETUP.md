# Setup Guide - Digital Daily Market

Complete guide to set up the Digital Daily Market crypto trading platform.

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Redis (optional, for caching)
- Docker & Docker Compose (optional)
- Git

## Option 1: Docker Setup (Recommended)

### Quick Start

```bash
# Clone repository
git clone https://github.com/empirehub01/digital-daily-market.git
cd digital-daily-market

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env

# Start all services
docker-compose up --build
