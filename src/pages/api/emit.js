// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const io = res.socket.server.io
  io.emit('from /api/emit', {ok: 1})
  res.status(200).json({ name: 'John Doe' })
}
