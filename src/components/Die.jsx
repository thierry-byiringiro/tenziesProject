export default function Die({value}){
    const coloR = value % 2 == 0 ? '#59E391' : '#f5f5f5';
    return (
        <>
                <button style={{backgroundColor : coloR}}  className="w-[35.84px] h-[35.84px] font-bold  rounded-[3.81px]  flex items-center justify-center mt-1 shadow-[0px_2px_2px_rgba(0,0,0,0.15)]">{value}</button>
        </>
    );
}