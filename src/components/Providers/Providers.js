import React, { Fragment } from 'react'
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux'
import { getProvider } from '../../redux/Providers/providers-management'

const columns = [
    {
        title: 'RUT',
        field: 'rut'
    },
    {
        title: 'Address',
        field: 'address'
    },
    {
        title: 'businessName',
        field: 'businessName'
    },
    {
        title: 'User',
        field: 'user.email'
    }
];

const Providers = () => {

    const dispatch = useDispatch()
    const providers = useSelector(store => store.providers.array)
    let data = []  
    if(typeof providers._embedded !== 'undefined' && !Array.isArray(providers._embedded)){
        data  = providers._embedded.providerDTOList
    }
    return (
        <Fragment>          
                <MaterialTable
                    columns={columns}
                    data={data}
                    title="Proveedores"
                    actions={
                        [
                            {
                                icon: 'edit',
                                tooltip: 'Editar',
                                onClick: (event, rowData) => alert('Alert')
                            },
                            {
                                icon: 'visibility',
                                tooltip: 'Ver Detalles',
                                onClick: (event, rowData) => dispatch(getProvider(rowData._links.self.href))
                            }
                        ]
                    }
                    options={
                        { actionsColumnIndex: -1 }
                    }
                    localization={
                        {
                            header: {
                                actions: 'Acciones'
                            }
                        }
                    } />       
            
         
        </Fragment>
    )
}

export default Providers
