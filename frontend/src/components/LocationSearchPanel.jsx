import React from 'react'

const LocationSearchPanel = ({suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion.description || suggestion);
    } else if (activeField === 'destination') {
        setDestination(suggestion.description || suggestion)
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
}

  return (
    <div>
      {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>
                          {/* {elem} */}
                          {typeof elem === "string" ? elem : elem.description || "No Description"}
                          </h4>
                    </div>
                ))
            }

    </div>
  )
}

export default LocationSearchPanel
