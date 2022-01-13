module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7264405a8fcd2569f44125ea733b8393'),
  },
});
