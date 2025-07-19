"use client";
import Image from "next/image";
import { useState } from "react";
import { createSupabaseBrowserClient } from "../lib/supabase-browser";

export default function AddItems() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [imgUrl, setImgUrl] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !price || !quantity || !imgUrl) {
      setMessage("Por favor ingresa todos los datos");
      return;
    }

    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.from("product").insert([
      {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        image_url: imgUrl,
      },
    ]);
    console.error(error);
  };
  return (
    <main className="flex items-center justify-center  min-h-screen bg-amber-50">
      <section className="flex flex-col h-full md:flex-row bg-amber-200 rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-black bg-white p-10"
        >
          <h1 className="text-5xl mt-10">Ingresa un nuevo producto</h1>

          <div>
            <p>Nombre del producto</p>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Nombre del producto"
              className="mb-7 px-4 py-2 w-100 border-b"
            />
          </div>
          <div>
            <p>Descripción</p>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder="Descripción"
              className="mb-7 px-4 py-2 w-100 border-b"
            />
          </div>
          <div className="">
            <p>Precio en pesos</p>
            $
            <input
              type="number"
              onChange={(e) => setPrice(Number(e.target.value))}
              value={price}
              className="mb-7 px-4 py-2 w-100 border-b"
            />
          </div>
          <div>
            <p>Cantidad</p>
            <input
              type="number"
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}
              className="mb-7 px-4 py-2 w-100 border-b"
            />
          </div>
          <div>
            <p>Link de la imagen</p>
            <input
              type="text"
              onChange={(e) => setImgUrl(e.target.value)}
              value={imgUrl}
              className="mb-7 px-4 py-2 w-100 border-b"
            />
          </div>
          <button className="bg-amber-900 text-white rounded py-2">
            Enviar Solicitud
          </button>
        </form>
        <div className="m-10 bg-white">
          <h1 className="  text-2xl text-amber-900">Preview</h1>
          <div className=" rounded-lg  p-6 flex flex-col items-center">
            <div className="min-w-[30%]  h-[50%] bg-amber-100 rounded mb-4 flex items-center justify-center">
              <Image
                src={imgUrl}
                alt={name}
                width={160}
                height={160}
                className="w-full h-full rounded"
              />
            </div>
            <h2 className="text-2xl font-semibold text-amber-900 mb-2 text-center">
              {name}
            </h2>
            <p className="text-amber-800 mb-2 text-center">{description}</p>
            <span className="text-lg font-bold text-amber-700 mb-4">
              {price}
            </span>
          </div>
          {message !== "" && <h1 className="text-4xl"> </h1>}
        </div>
      </section>
    </main>
  );
}
