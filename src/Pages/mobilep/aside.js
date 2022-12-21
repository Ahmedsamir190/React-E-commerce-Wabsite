

function Aside() {

    return (
        <>
        <div className='aside '>
            <h3>Brand</h3>
            <form>
                <div className='check '>
                    <div className='input-check  '>
                        <input id="apple" type={"checkbox"} name={"os"} />
                        <label htmlFor='apple'>apple</label>
                    </div>
                    <div className='input-check '>
                        <input id="samsung" type={"checkbox"} name={"os"} />
                        <label htmlFor='samsung'>samsung</label>
                    </div>
                    <div className='input-check '>
                        <input  id="anker" type={"checkbox"} name={"os"} />
                        <label htmlFor='anker'>anker</label>
                    </div>
                </div>
                    

                <h3> color</h3>
                <div className='check '>
                    <div className='input-check '>
                        <input id="red" type={"checkbox"} name={"os"} />
                        <label htmlFor='red'>red</label>
                    </div>
                    <div className='input-check '>
                        <input id="yellow" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='yellow'>yellow</label>
                    </div>
                    <div className='input-check '>
                        <input  id="blue" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='blue'>blue</label>
                    </div>
                </div>

            
                <h3> Network Type</h3>
                <div className='check '>
                    <div className='input-check '>
                        <input id="5G" type={"checkbox"} name={"os"} />
                        <label htmlFor='5G'>5G</label>
                    </div>
                    <div className='input-check '>
                        <input id="4G" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='4G'>4G</label>
                    </div>
                    <div className='input-check '>
                        <input  id="3G" type={"checkbox"}  name={"os"}/>
                        <label htmlFor='3G'>3G</label>
                    </div>
                </div>

                <h3> Price</h3>
                <div className='filter-price'>
                    <div className='input-price'>
                        <input id="price" type={"number"} min={"100"} max={"1000"}  name={"os"}/>
                    </div>
                    <span>to</span>
                    <div className='input-price'>
                        <input id="price" type={"number"} name={"os"} />
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default Aside;