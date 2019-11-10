import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     maxWidth: 250,
//     maxHeight: 350
//   },
//   media: {
//     height: 140,
//   },
// };

// function MediaCard(props) {
//   const { classes } = props;
//   return (
//     <Card className={classes.card} style={{margin: '10px'}}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-tRqbWzQnIwdExFzBcFkbkHm7B2SrLyEQuTtBNYHALyw7_Tl"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           {/* price : {{price}} */} price :
//         </Button>
//         <Button size="small" color="primary">
//           นำเข้าตะกร้า
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

// MediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(MediaCard);

export default class Shopingcart extends React.Component{
  constructor(props){
    
    super(props);

    this.state = {
      data : null
    };
  }
  
componentDidMount(){
    // console.log('call createtable');
    fetch('http://localhost:3000/api/products/allproduct')
          .then(res=>{
            return res.json();
             }).then(data=>{
                let allproducts = data.product.map((product,index)=>{
                  console.log(index,JSON.stringify(product));
                  return(
                    <Card className={index+1} style={{margin: '10px'}}>
                    <CardActionArea>
                      <CardMedia
                        className={product.name}
                        image={product.image}
                        title={product.name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {product.name}
                        </Typography>
                        <Typography component="p">
                          {product.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        {/* price : {{price}} */} price :
                      </Button>
                      <Button size="small" color="primary">
                        นำเข้าตะกร้า
                      </Button>
                    </CardActions>
                  </Card>
                  )
                })
                // console.log(allproducts);
                this.setState({data:allproducts})
               
             });
  }
  render (){
    return(
      // <div>
      //   {this.state.data}
      // </div>
      this.state.data
    )
  } 
}