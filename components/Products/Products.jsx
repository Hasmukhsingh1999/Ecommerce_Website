"use client";
import React, { useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ModalClose, Sheet } from "@mui/joy";
import { Modal, Stack, TextField, Typography } from "@mui/material";
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const FilterModal = ({ maxPrice, minPrice, sortSelect, setModalOpen, modalOpen, setSortSelect, setMaxPrice, setMinPrice }) => {

  const [priceRangeValue, setPriceRangeValue] = useState([minPrice, maxPrice]);

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRangeValue(newValue);
  };

  const [sort, setSort] = useState(sortSelect)

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const handleClear = () => {
    setSortSelect("")
    setMinPrice(0)
    setMaxPrice(5000)
  }

  const handleSave = () => {
    setMinPrice(priceRangeValue[0])
    setMaxPrice(priceRangeValue[1])
    setSortSelect(sort)
    setModalOpen(false)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }


  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={modalOpen}
      onClose={handleModalClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        sx={{
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          outline: "none"
        }}
      >
        <ModalClose
          onClick={handleModalClose}
          variant="outlined"
          sx={{
            bgcolor: "background.surface",
          }}
        />
        <div className="relative flex flex-col w-[90vw] md:w-[75vw] lg:w-[60vw] md:px-16">
          {/* title */}
          <div className="w-full">
            <h1 className="text-center text-3xl font-semibold">More Filters</h1>
          </div>
          <div className="px-4 w-full flex flex-col gap-4 items-start">
            <h1 className="text-2xl font-bold my-4">Select Price Range</h1>
            <Slider
              getAriaLabel={() => "Price range"}
              value={priceRangeValue}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
            />
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" className="gap-4">
              <TextField
                label="min"
                type="number"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ width: "90px" }}
                value={priceRangeValue[0]}
                onChange={(e) => {
                  setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
                }}
              />
              <Typography>-</Typography>
              <TextField
                label="max"
                type="number"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                sx={{ width: "90px" }}
                value={priceRangeValue[1]}
                onChange={(e) => {
                  setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
                }}
              />
            </Stack>
          </div>
          <div className="px-4 w-full flex flex-col gap-4 items-start">
            <h1 className="font-bold text-2xl mt-6">Sort Products</h1>
            <div className="w-full">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={sort}
                  onChange={handleChange}
                  label="Sort"
                >
                  <MenuItem value={"New to Old"}>New to Old</MenuItem>
                  <MenuItem value={"Old to New"}>Old to New</MenuItem>
                  <MenuItem value={"Price Low to High"}>Price Low to High</MenuItem>
                  <MenuItem value={"Price High to Low"}>Price High to Low</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="w-full flex items-center gap-4">
            <div onClick={handleSave} className="w-fit flex items-center gap-2 hover:bg-blue-400/10 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 mt-4">
              <CheckIcon fontSize="medium" />
              <h1 className="font-semibold text-lg">Save</h1>
            </div>
            <div onClick={handleClear} className="w-fit flex items-center gap-2 hover:bg-red-500/10 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 mt-4">
              <ClearIcon fontSize="medium" />
              <h1 className="font-semibold text-lg">Clear Filters</h1>
            </div>
          </div>
        </div>
      </Sheet>
    </Modal>

  )
}

const getAllProductsAndCategory = async (page = 0, perPage = 20) => {
  try {
    const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page > 0 ? page * 10 : page}&limit=${perPage}`)

    const { data: categories } = await axios.get(`https://api.escuelajs.co/api/v1/categories`)


    return {
      data,
      categories
    }
  } catch (error) {
    throw new error
  }
}


const Products = () => {

  const [allProducts, setAllProducts] = useState([])
  const [allCategories, setAllCategories] = useState([])
  const [filteredCategory, setFilteredCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [seletedTitle, setSeletedTitle] = useState("")
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(5000)
  const [modalOpen, setModalOpen] = useState(false)
  const [sortSelect, setSortSelect] = useState("")

  const { data, refetch } = useQuery({
    queryFn: () => getAllProductsAndCategory(),
    queryKey: ['products'],
  })

  useEffect(() => {
    if (data) {
      setAllCategories(data.categories)
      setAllProducts(data.data)
      setFilteredCategory(data.data)
    }
  }, [data])

  useEffect(() => {
    if (selectedCategory !== "all") {
      const filteredData = async () => {
        const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products?title=${seletedTitle}&price_min=${minPrice}&price_max=${maxPrice}&categoryId=${selectedCategory}&offset=0&limit=20`)

        setFilteredCategory(data)
      }
      filteredData()
    } else {
      refetch()
      setFilteredCategory(allProducts)
    }
  }, [selectedCategory, minPrice, maxPrice])


  return (
    <div className="">
      <div>
        <h1 className={`py-[3vw] px-[4vw] font-bold text-2xl md:text-3xl`}>
          Products
        </h1>
        <div className="w-full flex flex-col sm:flex-row  justify-between px-[4vw]">
          <div className="flex flex-col sm:flex-row  gap-3">
            <span className="text-xl font-semibold">Filter Product: </span>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-2 py-2 border border-gray-300 rounded">
              <option value="">
                All
              </option>
              {allCategories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-2 md:gap-4 hover:cursor-pointer hover:bg-blue-400/5 px-4 py-2 rounded-lg transition-all duration-200" onClick={() => setModalOpen(true)}>
              <h1 className="font-semibold text-blue-500 text-base md:text-lg">More Filters</h1>
              <FilterAltIcon fontSize="large" />
            </div>
          </div>
          <div className="flex flex-col mt-4 sm:flex-row  gap-3 mt-2 sm:mt-0">
            <span className="text-xl font-bold">Sort Products:</span>
            <select className="p-2 border border-gray-300 rounded">
              <option disabled selected>
                Newest
              </option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
        <ProductItems data={filteredCategory} />
      </div>
      <FilterModal
        maxPrice={maxPrice}
        minPrice={minPrice}
        title={seletedTitle}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sortSelect={sortSelect}
        setSortSelect={setSortSelect}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
      />
    </div>
  );
};

export default Products;
