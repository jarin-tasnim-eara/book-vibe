"use client";

import books from '../data/books.json';

const COLORS = ['#2F8FE8','#1FBF98','#F5B400','#F5822D','#EF3B3B','#8B5CF6','#EC4899'];

const CHART_HEIGHT =380;
const BAR_WIDTH =110;

function getNiceMax(value){
  const step = Math.ceil(value /4/10)*10; 
  return step*4;
}

export default function ReadingChart(){
  const maxPages = Math.max(...books.map((b) => b.pages));
  const niceMax = getNiceMax(maxPages);
  const step = niceMax/4;
  const ySteps = [0,step,step *2,step *3,niceMax];

  return(
    <div className="bg-gray-50 rounded-xl p-8 overflow-x-auto">
      <div className="flex">

        <div className="flex flex-col justify-between text-xs text-gray-400 pr-3" style={{ height: CHART_HEIGHT }}>
          {[...ySteps].reverse().map((val) => (
            <span key={val}>{Math.round(val).toString().padStart(2, '0')}</span>
          ))}
        </div>


        <div className="relative flex-1" style={{ height: CHART_HEIGHT, minWidth: books.length * (BAR_WIDTH + 20) }}>

          <div className="absolute inset-0 flex flex-col justify-between">
            {ySteps.map((val) => (
              <div key={val} className="border-t border-dashed border-gray-200 w-full" />
            ))}
          </div>

          
          <div className="relative flex justify-around items-end h-full">
            {books.map((book, index) => {
              const height = (book.pages / niceMax) * CHART_HEIGHT;
              const color = COLORS[index % COLORS.length];
              return(
                <div key={book.id} className="flex flex-col items-center" style={{ width: BAR_WIDTH }}>
                  <span className="text-sm font-semibold mb-1" style={{ color }}>{book.pages}</span>
                  <svg width={BAR_WIDTH} height={height} viewBox={`0 0 ${BAR_WIDTH} ${height}`}>
                    <path d={`M0,${height} Q${BAR_WIDTH * 0.12},${height * 0.35} ${BAR_WIDTH / 2},0 Q${BAR_WIDTH * 0.88},${height * 0.35} ${BAR_WIDTH},${height} Z`} fill={color}/>
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    
      <div className="flex justify-around mt-3 pl-10" style={{ minWidth: books.length * (BAR_WIDTH + 20) }}>
        {books.map((book) =>(
          <span key={book.id} className="text-xs text-gray-500 text-center truncate" style={{ width: BAR_WIDTH }}>{book.title}</span>
        ))}
      </div>
    </div>
  );
}