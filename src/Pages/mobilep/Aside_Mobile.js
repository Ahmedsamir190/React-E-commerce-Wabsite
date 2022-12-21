function AsideMobile() {

    return (
        <div className='aside-mobile '>
            <form className="form-mobile">
                <h3 className="titlle-filter mb-0">Brand</h3>
                <div className='check-mobile '>
                    <div className='input-check-mobile  '>
                        <input id="apple" type={"checkbox"} name={"os"} />
                        <label htmlFor='apple'>apple</label>
                    </div>
                    <div className='input-check-mobile  '>
                        <input id="samsung" type={"checkbox"} name={"os"} />
                        <label htmlFor='samsung'>samsung</label>
                    </div>
                    <div className='input-check-mobile  '>
                        <input  id="anker" type={"checkbox"} name={"os"} />
                        <label htmlFor='anker'>anker</label>
                    </div>
                </div>

                <h3 className="titlle-filter  mb-0"> color</h3>
                <div className='check-mobile  '>
                    <div className='input-check-mobile  '>
                        <input id="red" type={"checkbox"} name={"os"} />
                        <label htmlFor='red'>red</label>
                    </div>
                    <div className='input-check-mobile  '>
                        <input id="yellow" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='yellow'>yellow</label>
                    </div>
                    <div className='input-check-mobile  '>
                        <input  id="blue" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='blue'>blue</label>
                    </div>
                </div>

                <h3 className="titlle-filter  mb-0"> Network Type</h3>
                <div className='check-mobile  '>
                    <div className='input-check-mobile  '>
                        <input id="5G" type={"checkbox"} name={"os"} />
                        <label htmlFor='5G'>5G</label>
                    </div>
                    <div className='input-check-mobile  '>
                        <input id="4G" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='4G'>4G</label>
                    </div>
                    <div className='input-check-mobile  '>
                        <input  id="3G" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='3G'>3G</label>
                    </div>
                </div>

                <h3 className="titlle-filter  mb-0"> Price</h3>
                <div className='filter-price-mobile'>
                    <div className='input-price-mobile'>
                        <input id="price" type={"number"} min={"100"} max={"1000"}  name={"os"}/>
                        <span>to</span>
                        <input id="price" type={"number"} name={"os"} />
                    </div>
            
                </div>
            </form>
        </div>
    )
}
export default AsideMobile;