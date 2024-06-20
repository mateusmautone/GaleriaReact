import React, { useEffect, useState, FormEvent } from "react";
import * as C from '../../App.styles';
import { Photo } from '../../types/Photo';
import * as Photos from '../../services/photos'

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



const Admin = () => {
   
    
    return(
        <C.Container>
            <C.Header>Tela Admin</C.Header>
            <Sidebar>
  <Menu>
    <SubMenu label="Usuários">
      <MenuItem> -- </MenuItem>
      <MenuItem> -- </MenuItem>
    </SubMenu>
    <MenuItem component={<Link to="/" />}> Galeria </MenuItem>
    <MenuItem> Configurações </MenuItem>
    <MenuItem> Excluir conta </MenuItem>
  </Menu>
</Sidebar>
        </C.Container>
    )
}

export default Admin;