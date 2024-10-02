import CarCard from "@/components/CarCard";
import CustomFilters from "@/components/CustomFilters";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { CarProps } from "@/types";
import { getCars } from "@/utils";

export default async function Home() {
  const allCars = await getCars();
  const isEmpty = allCars.length<1 || !allCars;
  return (
    <div className="overflow-hidden">
        <Hero/>
    
        <div className='mt-12 px-16 py-16 w-full'>
          <div >
            <h1 className='text-6xl font-bold font-sans'>Car Catalogue</h1>
            <p className="text-xl my-3 mb-8">Explore out cars you might like</p>
          </div>

          <div>
            <SearchBar />

            <div className='home__filter-container'>

            </div>
          </div>
          {!isEmpty?(
            <section>
              <div >
                {allCars?.map((car:CarProps,i:number) => (
                  <CarCard key={i} car={car}/>
                ))}
              </div>

              {/* <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              /> */}
            </section>
          ):(
            <div>
              no cars
            </div>
          )}
        </div>
    </div>
  );
}
