import React, { useEffect, useState } from 'react';
import './Table.css';

/**
 * Componente para renderizar uma Tabela em formato de GRID com funcionalidade de Ordenação nos Headers das Colunas
 * @param {*} param0 
 * @returns 
 */
function Table({ refreshOrderCallback, ...props }) {


    const [selectedOrder, setSelectedOrder] = useState('');
    const [direction, setDirection] = useState('asc');
    const [templateColumns, setTemplateCollumns] = useState('repeat(5, 20%)');


    /**Gera a string que define o número de colunas do Grid quando o componente é montado*/
    useEffect(() => {
        const texto = props.tableHeader.reduce(
            (acumulador, atual) => {
                return acumulador + ' ' + (atual.tamanho || 'auto');
            },
            ''
        )
        setTemplateCollumns(texto);
    }, [props.tableHeader]);

    /**Efeito para ativar o Callback de ordenação quando o estado é alterado*/
    useEffect(() => {
        refreshOrderCallback(selectedOrder, direction);
    }, [selectedOrder, direction, refreshOrderCallback]);

    /**Altera o estado da ordenação de acordo com o estado anterior*/
    function updateSelectedOrder(value) {
        let dir = 'asc';
        if (selectedOrder === value && direction === 'asc') {
            dir = 'desc';
        }
        setSelectedOrder(value);
        setDirection(dir);
    }

    return (
        <div className={'h-full bg-grey-100 font-base'}>
            <div id='table-master-div' className=' w-full grid text-base text-left overflow-y-auto | rounded-sm'
                style={{ 'gridTemplateColumns': templateColumns || 'repeat(5, 200px)' }}>

                {props.tableHeader.map((headerItem, i) =>
                    <div key={i} className='font-medium bg-primary-pure py-xs pl-nano text-low-pure | cursor-pointer sticky top-0'
                        onClick={refreshOrderCallback ?
                            () => updateSelectedOrder(headerItem.value) : () => { }}
                    >
                        {headerItem.header}
                        {
                            selectedOrder === headerItem.value
                            && <div className={'triangle-' + direction}></div>
                        }
                    </div>
                )}
                {props.contentSource.map((contentItem, i) => {
                    return props.tableHeader.map((header, i) => {
                        return <div key={i} className={`text-xxs pl-nano py-xs bg-high-pure border-b-hairline border-high-medium | cursor-pointer `}
                            onClick={() => props.onClickCallback(contentItem)}
                            style={props.hasCustomTdStyle ? props.getCustomTdStyle(header.value, contentItem[header.value]) : {}}
                        >
                            {header.customTD_generator ? header.customTD_generator(contentItem[header.value]) : contentItem[header.value]}
                        </div>
                    })
                })
                }
                {/* <div id='table-header' className='bg-gray-600 text-white grid h-12 sticky' 
                style={{ 'gridTemplateColumns': templateColumns || 'repeat(5, 200px)' }}>
            </div> */}
                {/* <div id='table-body' className='bg-gray-200 overflow-y-auto text-xs grid'>
            </div> */}
            </div >
        </div>
    );

}

export default Table;