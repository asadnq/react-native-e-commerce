import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { ListItem, Icon, Text, Left, Thumbnail, Body, Right, Button } from 'native-base';

import RupiahFormat from '../UI/texts/RupiahFormat';
import Lato from '../UI/texts/Lato';
import { API_URL } from '../../store/config';

const ListPayment = props => {


    return(
        <ListItem noIndent thumbnail>
            <Left>
                <Thumbnail style={styles.prThumb} square source={{uri: API_URL + props.cover_image}} resizeMode='contain'/>
            </Left>
            <Body>
                <Lato style={styles.prName}>{ props.name }</Lato>
                <Lato style={styles.prQty}>{props.quantity} item</Lato>
                <RupiahFormat text={props.price_sum} />
            </Body>
        </ListItem>
    )
}


const styles = StyleSheet.create({
    prName: {
        borderBottomWidth: .8,
        fontSize: 16,
        borderColor: '#c9c9c9'
    },
    prQty: {
        color: '#777'
    },
    prImg: {
        height: 78
    },
    prThumb: {
        height: 70,
        marginTop: 2
    }
});

export default ListPayment;