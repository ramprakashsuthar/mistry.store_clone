import React from 'react'

export default function PdfCatlog() {
    return (
        <>
            <section className="mt-lg-5 mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="label-color-2 fw-600 fs-20 d-flex align-items-center mt-3 mt-lg-0 mb-0">
                                <img src="https://mistry.store/images/document-text.svg" alt="Image" className="img-fluid me-2" />Catalogues</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home-resp-search pt-3">
                                <div className="mb-3 top-catalogs-search mb-4">
                                    <div className="d-flex justify-content-center catalogs-search">
                                        <div className="d-flex catalogs-search-input">
                                            <div className="position-relative w-100">
                                                <div className="radius-input input-search w-100 bg-white position-relative">
                                                    <input type="search" className="bg-transparent outline-none fs-17 w-100 " placeholder="Search wires, plywood, paints..etc." value="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="fs-16 label-color-2 fw-600 mb-4">Catalogues by Category</h2>
                                <div className="d-flex flex-wrap categs-row mb-2">
                                    <div className="me-lg-3 categs-box mb-lg-4 mb-3">
                                        <div className="h-100 categ-card p-2 d-flex align-items-center justify-content-center cursor-pointer">
                                            <div className="text-center">
                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Plug.png" alt="Img" className="img-fluid mb-3" />
                                                <p className="m-0 fs-12 fw-500 label-color-2">Electricals</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-lg-3 categs-box mb-lg-4 mb-3">
                                        <div className="h-100 categ-card p-2 d-flex align-items-center justify-content-center cursor-pointer">
                                            <div className="text-center">
                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Paint+Roller.png" alt="Img" className="img-fluid mb-3" />
                                                <p className="m-0 fs-12 fw-500 label-color-2">Paints</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-lg-3 categs-box mb-lg-4 mb-3">
                                        <div className="h-100 categ-card p-2 d-flex align-items-center justify-content-center cursor-pointer">
                                            <div className="text-center">
                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Wood.png" alt="Img" className="img-fluid mb-3" />
                                                <p className="m-0 fs-12 fw-500 label-color-2">Wood Materials</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-lg-3 categs-box mb-lg-4 mb-3">
                                        <div className="h-100 categ-card p-2 d-flex align-items-center justify-content-center cursor-pointer">
                                            <div className="text-center">
                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Group.png" alt="Img" className="img-fluid mb-3" />
                                                <p className="m-0 fs-12 fw-500 label-color-2">Hardware</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-lg-3 categs-box mb-lg-4 mb-3">
                                        <div className="h-100 categ-card p-2 d-flex align-items-center justify-content-center cursor-pointer">
                                            <div className="text-center">
                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Plumbing.png" alt="Img" className="img-fluid mb-3" />
                                                <p className="m-0 fs-12 fw-500 label-color-2">Plumbing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-lg-3 categs-box mb-lg-4 mb-3">
                                        <div className="h-100 categ-card p-2 d-flex align-items-center justify-content-center cursor-pointer">
                                            <div className="text-center">
                                                <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Floor.png" alt="Img" className="img-fluid mb-3" />
                                                <p className="m-0 fs-12 fw-500 label-color-2">Floorings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="fs-16 label-color-2 fw-600 mb-4">Handpicked Catalogues for you</h2>
                        </div>
                    </div>
                    <div className="row mb-4 mt-2">
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/havells-switches-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/HAvells-Switches-Catalogue.pdf.png"
                                        alt="Havells Switches Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Havells.png"
                                            alt="Havells" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Havells Switches Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/vectus-complete-pipe-and-fitting-catalo">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Vectus-Complete-pipe-and-fitting-catalo.pdf.png"
                                        alt="Vectus Complete pipe and fitting catalo" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Vectus.png"
                                            alt="Vectus" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Vectus Complete pipe and fitting catalo</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/supreme-upvc-pipe-fittings-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/supreme-upvc-pipe-fittings-Catalogue.pdf.png"
                                        alt="supreme upvc pipe fittings Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/SUPREME.png"
                                            alt="Supreme" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">supreme upvc pipe fittings Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/3m-green-masking-tape-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/3M-Green-Masking-tape-Catalog.pdf.png"
                                        alt="3M Green Masking tape Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/3M_wordmark.svg.png"
                                            alt="3M" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">3M Green Masking tape Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/astral-cpvc-pro-pipe-and-fitting-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/astral-CPVC-pro-pipe-and-fitting-catalog.pdf.png"
                                        alt="astral CPVC pro pipe and fitting catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/ASTRAL.png"
                                            alt="Astral" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">astral CPVC pro pipe and fitting catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/apl-apollo-cpvc-pipes-and-fitting-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/APL-apollo-cpvc-pipes-and-fitting-catalog.pdf.png"
                                        alt="APL apollo cpvc pipes and fitting catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/APLAPOLLO.png"
                                            alt="APLApollo" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">APL apollo cpvc pipes and fitting catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/ozone-door-and-cabinet-hardware-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Ozone-Commercial-Glass-Partition-Systems.pdf.png"
                                        alt="Ozone Door and Cabinet hardware Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/OZONE.png"
                                            alt="ozone" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Ozone Door and Cabinet hardware Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/ozone-cabinet-hardware-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Ozone-Architectural-Railing-Solutions-Edition-%233.pdf.png"
                                        alt="Ozone cabinet hardware catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/OZONE.png"
                                            alt="ozone" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Ozone cabinet hardware catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2">

                                </p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/ebco-kitchen-hardware-catalogue-1">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Ebco.pdf.png"
                                        alt="Ebco kitchen Hardware Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/EBCO.png"
                                            alt="Ebco" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Ebco kitchen Hardware Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/usg-borel-gypsum-boards-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/USG-BOREL-Gypsum-Boards-Catalog.pdf.png"
                                        alt="USG BOREL Gypsum Boards Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/cropped-Logo-Final-10.png"
                                            alt="USG" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">USG BOREL Gypsum Boards Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/gyproc-false-ceiling-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Gyproc-False-Ceiling-Catalog.pdf.png"
                                        alt="Gyproc False Ceiling Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Gyproc.png"
                                            alt="Gyproc" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Gyproc False Ceiling Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/virgomica-laminate-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Virgomica-Laminate-Catalog.pdf.png"
                                        alt="Virgomica Laminate Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Virgo.png"
                                            alt="Virgo" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Virgomica Laminate Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/merino-high-pressure-laminates-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Merino-High-Pressure-Laminates-Catalog.pdf.png"
                                        alt="Merino High Pressure Laminates Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Merino.png"
                                            alt="Merino" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Merino High Pressure Laminates Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/greenpanel-mdf-board-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Greenpanel-MDF-Board-Catalog.pdf.png"
                                        alt="Greenpanel MDF Board Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Green+Panel.png"
                                            alt="Green Panel" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Greenpanel MDF Board Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block"
                                    href="https://mistry.store/pdf-catalog/anchor-ziva-switches-and-sockets-catelogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Anchor-Ziva-Switches-and-sockets-Catelogue.pdf.png"
                                        alt="Anchor Ziva Switches and sockets Catelogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Anchor.png"
                                            alt="Anchor" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Anchor Ziva Switches and sockets Catelogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/myk-laticrete-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/MYK-LATICRETE-Catalogue.pdf.png"
                                        alt="MYK LATICRETE Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/MYKLATICRETE.htm"
                                            alt="MYKLaticrete" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">MYK LATICRETE Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/jsw-interior-paints-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/JSW-interior-Paints-Catalogue.pdf.png"
                                        alt="JSW interior Paints Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/cropped-Logo-Final-10.png"
                                            alt="JSW Paints" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">JSW interior Paints Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/century-sainik-laminated-door-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Century-Sainik-Laminated-Door-Catalog.pdf.png"
                                        alt="Century Sainik Laminated Door Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/century.png"
                                            alt="Century" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Century Sainik Laminated Door Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/century-mdf-board-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Century-MDF-Board-Catalog.pdf.png"
                                        alt="Century MDF Board Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/century.png"
                                            alt="Century" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Century MDF Board Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/action-tesa-hdhmr-board-catelogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/ACTION-Tesa-HDHMR-Board-Catelogue.pdf.png"
                                        alt="ACTION Tesa HDHMR Board Catelogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/action.png"
                                            alt="Action Tesa" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">ACTION Tesa HDHMR Board Catelogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/anchor-wires-cable-and-switchgear-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Anchor-Wires-Cable-and-Switchgear-Catalog.pdf.png"
                                        alt="Anchor Wires Cable and Switchgear Catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Anchor.png"
                                            alt="Anchor" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Anchor Wires Cable and Switchgear Catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/polycab-wire-and-cables-catalog">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Polycab-wire-and-Cables-catalog.pdf.png"
                                        alt="Polycab wire and Cables catalog" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/polucab.png"
                                            alt="Polycab" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Polycab wire and Cables catalog</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                        <div className="col-20 col-md-3 col-sm-4 col-6 mb-4">
                            <div className="category-catalog-card">
                                <a className="position-relative mb-2 d-block" href="https://mistry.store/pdf-catalog/havells-consumer-wire-and-cable-catalogue">
                                    <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Havells-Consumer-wire-and-Cable-Catalogue.pdf.png"
                                        alt="Havells Consumer wire and Cable Catalogue" className="img-fluid rounded category-img" />
                                    <div
                                        className="brand-icon rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                        <img src="https://artifacts-110268756622-ap-south-1.s3.ap-south-1.amazonaws.com/catalogue/images/Havells.png"
                                            alt="Havells" className="img-fluid" />
                                    </div>
                                </a>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h3 className="color-black fs-18 line-clamp-1 m-0">Havells Consumer wire and Cable Catalogue</h3>
                                </div>
                                <p className="line-clamp-2 color-medium fs-14 mb-2"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
