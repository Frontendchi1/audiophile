export const getOneProject = (slug: string) => {
	return `*[_type == "product" && slug.current == "${slug}"] {
  id, 
  name, 
  slug, 
  cartName,
  mainImageMobile{
  	asset->{
  		url
		}
	},
  mainImageTablet{
  	asset->{
  		url
		}
	},
  mainImageDesktop{
  	asset->{
  		url
		}
	},
  cartImage{
  	asset->{
  		url
		}
	},
  categories->{
    title
  },
  new,
  price,
  description,
  feature,
    include[]{
      quantity,
      item
    },
  galleryMobile[]{
    asset->{
    url
  }
  },
  galleryTablet[]{
    asset->{
    url
  }
  },
  galleryDesktop[]{
    asset->{
    url
  }
  },
  recommended[]->{
    name, 
    slug, 
    sharedImageMobile{
      asset->{
        url
      }
    },
    sharedImageTablet{
      asset->{
        url
      }
    },
    sharedImageDesktop{
      asset->{
        url
      }
    },
  }
}`
}

export const getProductsByCategory = (slug: string) => {
	return `*[_type == "product" && categories->slug.current == "${slug}" ] {
    id,
    slug,
    name, 
    categories->{
      title
    },
    new, 
    description,
    previewImageMobile{
      asset->{
        url
      }
    },
    previewImageTablet{
      asset->{
        url
      }
    },
    previewImageDesktop{
      asset->{
        url
      }
    },
  }
  `
}

export const getAllProductSlugs = `*[_type == "product"  ] {
  slug
}`
//RETURN SLUG ARRAY

export const getAllCategorySlugs = `*[_type == "category"  ] {
  slug, 
  _id
}`
// RETURNS SLUG ARRAY

export const getHomeContent = `*[_type == "homeContent"][0]{
  heroImage[]{
    asset->{
    	url
  	}
  },
  section1Image[]{
      asset->{
        url
      }
    },
  section2Image[]{
      asset->{
        url
      }
    },
  section3Image[]{
      asset->{
        url
      }
    },
  heroText,
  section1Text,
  heroProduct->{
    name, 
    slug
  },
  section1Product->{
    name, 
    slug
  },
  section2Product->{
    name, 
    slug
  },
  section3Product->{
    name, 
    slug
  },	
}`
