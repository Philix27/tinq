import {HomeLanding} from '../../comps/HomeComps/Landing/Landing'
import Products from '../../comps/products/'

  
export default function ProductsPage() {
  return (
    < >    
      <HomeLanding />
        <div className="section">
       <h1 className='sectionTitleSmall'>Vitabiotics</h1>
              
      </div>
          <Products category='Vitabiotics' />
          
           <div className="section">
       <h1 className='sectionTitleSmall'>Nivea</h1>              
          </div>
          
      <Products category='Nivea' />
    </>
  )
}
