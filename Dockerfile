FROM node:10.16.1
COPY . .
RUN yarn install
RUN yarn build
ENV HOST 0.0.0.0
EXPOSE 5000
CMD ["yarn", "start"]
