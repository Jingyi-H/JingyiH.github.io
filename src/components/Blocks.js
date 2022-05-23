import React from 'react'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Blocks = ({ blocks }) => {

  return (
    <>
      {blocks.map((block) => (
        <Table borderless>
          <tbody>
            <tr>
              <td>{ block.date }</td>
              <td>{ block.summary }</td>
              {/* <td>
                <FontAwesomeIcon icon={faChevronDown} style={{ color: '#aba7dd', cursor: 'pointer' }} 
                onClick={collapseBlock(block.id)} />
              </td> */}
            </tr>
            <tr>
              <td colSpan="2">
                <ul>
                  {block.bullets.map((bullet) => (
                    <li >{ bullet }</li>
                  )) }
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  )
}

export default Blocks