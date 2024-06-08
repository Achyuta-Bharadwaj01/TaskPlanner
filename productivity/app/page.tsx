import AddTodo from "@/components/shared/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/components/shared/Todo";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    }
  })

  return data;
}


export default async function Home() {
  const data = await getData();
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center gap-3">
      <span className="text-3xl font-extrabold uppercase text-white">Task-Planner </span>
      <h1 className="text-3xl font-extrabold uppercase mb-5 text-white">
        Next.js 14
        <span className="text-sky-400 ml-2">
          By Achyuta Bharadwaj
        </span>
      </h1>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
