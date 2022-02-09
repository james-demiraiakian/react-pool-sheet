import React from 'react';
import { useList } from '../context/PartListContext';
import Four from './number/Four';

export default function Match() {
  const { list } = useList();
  const length = list.length;
  console.log(length);

  switch (length) {
    case 4:
      return <Four />;
    case 5:
      <>
        <div>
          {list[0].name} vs {list[1].name}
        </div>
        <div>
          {list[2].name} vs {list[3].name}
        </div>
        <div>
          {list[4].name} vs {list[0].name}
        </div>
        <div>
          {list[1].name} vs {list[2].name}
        </div>
        <div>
          {list[4].name} vs {list[3].name}
        </div>
        <div>
          {list[0].name} vs {list[2].name}
        </div>
        <div>
          {list[1].name} vs {list[4].name}
        </div>
        <div>
          {list[3].name} vs {list[0].name}
        </div>
        <div>
          {list[2].name} vs {list[4].name}
        </div>
        <div>
          {list[3].name} vs {list[1].name}
        </div>
      </>;
      break;
    case 6:
      <>
        <div>
          {list[0].name} vs {list[1].name}
        </div>
        <div>
          {list[3].name} vs {list[4].name}
        </div>
        <div>
          {list[1].name} vs {list[2].name}
        </div>
        <div>
          {list[4].name} vs {list[5].name}
        </div>
        <div>
          {list[2].name} vs {list[0].name}
        </div>
        <div>
          {list[5].name} vs {list[3].name}
        </div>
        <div>
          {list[1].name} vs {list[4].name}
        </div>
        <div>
          {list[0].name} vs {list[3].name}
        </div>
        <div>
          {list[4].name} vs {list[2].name}
        </div>
        <div>
          {list[0].name} vs {list[5].name}
        </div>
        <div>
          {list[3].name} vs {list[1].name}
        </div>
        <div>
          {list[2].name} vs {list[5].name}
        </div>
        <div>
          {list[4].name} vs {list[0].name}
        </div>
        <div>
          {list[2].name} vs {list[3].name}
        </div>
        <div>
          {list[5].name} vs {list[1].name}
        </div>
      </>;
      break;
    // case 7:
    //   <>
    //   <div>
    //     {list[].name} vs {list[].name}
    //   </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div></>
    // case 8:
    //     <>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div></>
    // case 9:
    //     <>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div></>
    // case 10:
    //     <>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div></>
    // case 11:
    //     <>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div>
    //       <div>
    //         {list[].name} vs {list[].name}
    //       </div></>
    // case 12:
    //   <>
    //   <div>
    //     {list[].name} vs {list[].name}
    //   </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div>
    //     <div>
    //       {list[].name} vs {list[].name}
    //     </div></>

    default:
      break;
  }
  return <div>Match</div>;
}
