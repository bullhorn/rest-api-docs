FROM ruby:3.0-alpine

RUN apk --no-cache add build-base nodejs npm git

WORKDIR /srv/slate

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

EXPOSE 4567

CMD ["bundle", "exec", "middleman", "server", "--watcher-force-polling"]