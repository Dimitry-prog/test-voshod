import { fetchItem, fetchItems } from "@/services";
import Pagination from "@/components/pagination";
import Card from "@/components/card";
import Modal from "@/components/modal";

type HomeProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Home({ searchParams }: HomeProps) {
  const page = (searchParams?.page) || '1';
  const itemId = (searchParams?.item);
  const items = await fetchItems(page)
  const item = await fetchItem(itemId as string);

  const modalContent = (
    <div className='p-4 flex flex-col gap-2'>
      <h2>{item.name}</h2>
      <p>{item.text}</p>
    </div>
  )

  return (
    <main className='p-4 flex flex-col gap-4 justify-center items-center'>
      <h2 className='font-bold text-2xl uppercase'>hello</h2>

      <section className='flex flex-col gap-6'>
        <ul className='flex flex-wrap gap-2'>
          {items && items.items.map(item => (
            <Card item={item} key={item.id}/>
          ))}
        </ul>

        <div className='mt-4 self-end'>
          <Pagination page={items.page} pages={items.pages}/>
        </div>

        <Modal paramsName='item'>
          {modalContent}
        </Modal>
      </section>
    </main>
  );
}
