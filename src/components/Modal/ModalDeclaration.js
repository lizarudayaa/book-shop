import Button from "../../UI/Button/Button";

export const modals = [
    {
        modalID:1,
        header: 'Product card',
        text: 'Do you want to add this item to your card?',
        actions: function ({btnClose , btnAdd}){
            return(
                <>
                    <Button text='Add' color='black' onClick={btnAdd} />
                    <Button text='NO' color='black' onClick={btnClose} />
                </>
            )
        }
    },
    {
        modalID:2,
        header: 'Delete product from cart?',
        text:'Are you sure you want to delete this product?',
        actions: function ({agree, disagree}){
            return(
                <>
                    <Button className='modal_btn' text='OK' color='black' onClick={agree}/>
                    <Button className='modal_btn close' text='NO' color='black' onClick={disagree}/>
                </>
            )
        }
    },

]
