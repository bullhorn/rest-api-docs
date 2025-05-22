FROM ruby:3.0-alpine

RUN apk --no-cache add build-base nodejs npm git bash

WORKDIR /srv/slate

# Copy Gemfile first
COPY Gemfile ./

# Install gems
RUN gem install bundler
RUN bundle install

# Copy ALL source files
COPY . .

# Debug: List files to make sure they're there
RUN ls -la source/stylesheets/

EXPOSE 4567
CMD ["bundle", "exec", "middleman", "server", "--bind-address=0.0.0.0"]
