import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

export default props => (
    <Text style={Estilo.txtG}>
        O vlor {props.max} é o maior valor {props.min}!
    </Text>
)