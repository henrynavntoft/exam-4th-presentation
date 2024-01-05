// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_SERVICE_KEY
// );

// export default async function route(req, res) {
//   if (req.method === "POST") {
//     const { data, error } = await supabase.from("Footer").insert([req.body]);

//     if (error) {
//       // Send error response
//       return res.status(500).json({ error: error.message });
//     }

//     // Send success response
//     return res.status(200).json(data);
//   } else {
//     // Handle non-POST requests
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
