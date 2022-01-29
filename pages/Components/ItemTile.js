import React from 'react';
import Link from 'next/link';
import { FaEthereum } from 'react-icons/fa';

const ItemTile = (props) => {
  return (
    <Link href={`/nft/${props.id}`} passHref>
      <div className="w-full bg-gray item-tile-hover-animation rounded-md cursor-pointer">
        <div className={`w-full h-44 overflow-hidden`}>
          <img className="h-44 w-full object-cover rounded-t-md" src={props.image} />
        </div>
        <div className="flex justify-center h-24 items-center">
          <div className="p-2 text-center ">
            <p className="text-lg font-bold text-white">{props.name}</p>
            <div className="flex items-center justify-center text-lg">
              <p>0.0002</p>
              <FaEthereum className="text-dark-purple text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemTile;
