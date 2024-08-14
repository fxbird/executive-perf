import {
    Button,
    ExpandableSearch,
    ExpandableTile,
    TextInput,
    TileAboveTheFoldContent,
    TileBelowTheFoldContent
} from "@carbon/react";
import React from "react";

export function Contributing(){
    return (
        <div style={{width: '400px'}}>
            <div style={{"display": "flex", "justifyContent": "flex-end", "alignItems": "center"}}>
                <ExpandableSearch size="lg" labelText="Search" closeButtonLabelText="Clear search input" id="search-expandable-1" onChange={() => {}} onKeyDown={() => {}} />
                {/*<Search   size="20" />*/}
            </div>
            <ExpandableTile onClick={() => console.log('click')} id="expandable-tile-1" tileCollapsedIconText="Interact to Expand tile"
                            tileExpandedIconText="Interact to Collapse tile">
                <TileAboveTheFoldContent>
                    <div style={{
                        height: '200px',
                        width: '200px'
                    }}>
                        Above the fold content here
                        <div style={{
                            paddingTop: '1rem'
                        }}>
                            <Button>Example</Button>
                        </div>
                    </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                    <div style={{
                        height: '200px',
                        width: '200px'
                    }}>
                        Below the fold content here
                        <TextInput id="test2" labelText="Content" invalidText="A valid value is required" />
                    </div>
                </TileBelowTheFoldContent>
            </ExpandableTile>
        </div>
    )
}
