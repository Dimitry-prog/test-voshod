'use client'

import { ItemType } from "@/types";
import { useCustomParams } from "@/hooks/use-custom-params";

type CardProps = {
  item: ItemType
}

const Card = ({ item }: CardProps) => {
  const { params, replace } = useCustomParams();

  const handleClick = () => {
    params.set('item', item.id.toString());
    params.set('showModal', 'y');
    replace(params);
  }

  return (
    <li onClick={handleClick} className='p-4 rounded-md shadow-md'>
      {item.name}
    </li>
  );
};

export default Card;