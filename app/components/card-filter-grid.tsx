import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import { SetStateAction, useState, useEffect } from 'react'

import CardFilter from "./card-filter";
import CardFilterProps from "~/interfaces/CardFilterProps"

interface CardFilters {
    filterItems: CardFilterProps[],
    onSelect: (e: string[]) => void
}

export default function CardFilterGrid(props: CardFilters) {
    const [searchInput, setSearchInput] = useState("");
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
    
    // Handle Search
    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        props.onSelect(selectedTeams)
    });

    // Handle card select
    const handleSelect = (e: string) => {
        if (selectedTeams.length > 0 && selectedTeams.includes(e)) {
            setSelectedTeams(selectedTeams.filter((item) => {
                return !item.toUpperCase().match(e.toUpperCase());
            }))
        } else {
            setSelectedTeams([...selectedTeams, e]);
        }
    }
    
    let filteredItems = props.filterItems;


    if (searchInput.length > 0) {
        // Maintain selected items
        let selectedItems = props.filterItems.filter((item) => {
            return selectedTeams.includes(item.Name);
        })

        selectedItems.map((item) => {
            item.IsSelected = true;
            return item;
        })

        // Grab search items - omitting duplicates
        filteredItems = props.filterItems.filter((item) => {
            return !selectedItems.includes(item)
            && item.Name.toUpperCase().startsWith(searchInput.toUpperCase());
        });
        filteredItems = [...selectedItems, ...filteredItems]
    }
    return (
        <Container>
            <Row>
                <div className="search-backdrop">
                    <input
                        type="text"
                        className="search-input w-100"
                        placeholder="Search here"
                        onChange={handleChange}
                        value={searchInput} />
                </div>
            </Row>
            <Row>
                {filteredItems
                    ? filteredItems.map(item => {
                        return (
                            <CardFilter
                                Name={item.Name}
                                IsSelected={item.IsSelected}
                                OnClick={handleSelect} />
                        )
                    })
                    : ""
                }
            </Row>
        </Container>
    )
}