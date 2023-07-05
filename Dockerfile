FROM nginx:latest

COPY dist /web/lp-admin
COPY nginx.conf /etc/nginx/conf.d/nginx.conf

CMD ["nginx","-g","daemon off;"]
