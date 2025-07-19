import CartList from "../atoms/cart-list";

export default function Cart() {
  return (
    <main className="flex justify-center items-center min-h-screen w-screen bg-amber-50 pt-24 px-4 text-black">
      <section className="flex-col bg-white p-5 justify-between items-center text-center mb-8 rounded-2xl">
        <CartList />
      </section>
    </main>
  );
}
