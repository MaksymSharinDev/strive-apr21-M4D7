import {Component} from 'react'
import {Card} from 'react-bootstrap'


const SingleBook = function(props) {
    console.log(props)
    return (
        <>
            <Card
                // onClick={() => setState({ selected: !state.selected })}
                onClick={() => props.changeSelectedBook(props.book.asin)}

                style={{border: props.selectedBook === props.book.asin ? '3px solid red' : 'none'}}
            >
                <Card.Img variant="top" src={props.book.img}/>
                <Card.Body>
                    <Card.Title style={{color: 'black'}}>{props.book.title}</Card.Title>
                </Card.Body>
            </Card>
            {/* {
                    state.selected && <CommentArea asin={props.book.asin} />
                } */}
        </>
    )
}


export default SingleBook