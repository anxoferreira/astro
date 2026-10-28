//get http://localhost:4321/api/hora

export async function GET({ params }) {
  const fecha = new Date().toLocaleString("es-ES");

  return new Response(JSON.stringify({ lafecha: fecha }), {
    headers: { "Content-Type": "application/json" },
  });
}
