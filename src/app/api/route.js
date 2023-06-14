const members = [
    {id:1, name: "john"},
    {id:2, name: "john"},
    {id:3, name: "john"},
    {id:4, name: "john"},
]

export async function GET(req){
    return new Response(JSON.stringify(members), {status:200})
}