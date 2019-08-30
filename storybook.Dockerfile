FROM node:10.16.1
COPY . .
RUN yarn install
RUN yarn build-storybook
EXPOSE 6006
CMD ["yarn", "storybook", "--", "--static-dir", "./storybook-static"]
