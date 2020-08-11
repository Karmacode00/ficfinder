import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

const FilterBar = (props) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
    <Dropdown className='d-flex flex-column flex-md-row'>
    <Dropdown  className='m-3' isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Dropdown
      </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem>Some Action</DropdownItem>
      <DropdownItem disabled>Action (disabled)</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Foo Action</DropdownItem>
      <DropdownItem>Bar Action</DropdownItem>
      <DropdownItem>Quo Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>

<Dropdown  className='m-3' isOpen={dropdownOpen} toggle={toggle}>
<DropdownToggle caret>
  Dropdown
  </DropdownToggle>
<DropdownMenu>
  <DropdownItem header>Header</DropdownItem>
  <DropdownItem>Some Action</DropdownItem>
  <DropdownItem disabled>Action (disabled)</DropdownItem>
  <DropdownItem divider />
  <DropdownItem>Foo Action</DropdownItem>
  <DropdownItem>Bar Action</DropdownItem>
  <DropdownItem>Quo Action</DropdownItem>
</DropdownMenu>
</Dropdown>

<Dropdown  className='m-3' isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Dropdown
      </DropdownToggle>
    <DropdownMenu>
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem>Some Action</DropdownItem>
      <DropdownItem disabled>Action (disabled)</DropdownItem>
      <DropdownItem divider />
      <DropdownItem>Foo Action</DropdownItem>
      <DropdownItem>Bar Action</DropdownItem>
      <DropdownItem>Quo Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>

  <Button className="m-3" color="info"> Apply Filters </Button>
  </Dropdown>
 
  </div>
  );
}

export default FilterBar;