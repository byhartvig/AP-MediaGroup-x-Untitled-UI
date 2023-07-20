//Navigation links
const navigationLinks = [
  {
    name: 'Home',
    href: '#',
    current: false,
  },
  {
    name: 'Dashboard',
    href: '#',
    current: true,
    subLinks: [
      {
        name: 'Overview',
        href: '#',
        current: true,
      },
      {
        name: 'Notifications',
        href: '#',
        current: false,
      },
      {
        name: 'Analytics',
        href: '#',
        current: false,
      },
      {
        name: 'Saved Reports',
        href: '#',
        current: false,
      },
      {
        name: 'Scheduled Reports',
        href: '#',
        current: false,
      },
      {
        name: 'Customers',
        href: '#',
        current: false,
      },
    ],
  },
  {
    name: 'Projects',
    href: '#',
    current: false,
    subLinks: [
      {
        name: 'Test project #1',
        href: '#',
        current: true,
      },
      {
        name: 'Test project #2',
        href: '#',
        current: false,
      },
      {
        name: 'Test project #3',
        href: '#',
        current: false,
      },
    ],
  },
  {
    name: 'Tasks',
    href: '#',
    current: false,
  },
  {
    name: 'Users',
    href: '#',
    current: false,
  },
];
function appendLinksToElement(links, elementId) {
  const element = document.querySelector(elementId);
  element.innerHTML = ''; // Clear existing links
  links.forEach((link) => {
    const liElement = document.createElement('li');
    const linkElement = document.createElement('a');
    liElement.appendChild(linkElement);
    linkElement.setAttribute('href', link.href);
    linkElement.textContent = link.name;
    linkElement.classList.add(
      'text-gray-600',
      'hover:bg-gray-100',
      'transition-all',
      'hover:text-gray-900',
      'px-3',
      'py-3',
      'rounded-md',
      'text-sm',
      'font-medium',
    );
    if (link.current) {
      linkElement.classList.add('bg-gray-100', 'text-gray-900');
    }
    liElement.appendChild(linkElement);
    element.appendChild(liElement);
    linkElement.addEventListener('click', () => handleLinkClick(links, link));
  });
}

function handleLinkClick(links, clickedLink) {
  links.forEach((link) => {
    if (link !== clickedLink) {
      link.current = false;
    }
  });

  const subNavigationLinksElement = document.querySelector(
    '#subNavigationLinks',
  );
  const subNavWrapperElement = document.querySelector('#subNavWrapper');

  if (clickedLink.subLinks && clickedLink.subLinks.length > 0) {
    appendLinksToElement(clickedLink.subLinks, '#subNavigationLinks');
    subNavWrapperElement.style.display = 'flex';
  } else {
    subNavigationLinksElement.innerHTML = ''; // Clear sublinks
    subNavWrapperElement.style.display = 'none';
  }

  clickedLink.current = true;
  appendLinksToElement(links, '#navigationLinks');
}

function appendSubLinksOnLoad(links) {
  const activeLink = links.find((link) => link.current);
  if (activeLink && activeLink.subLinks) {
    const subNavigationLinksElement = document.querySelector(
      '#subNavigationLinks',
    );
    appendLinksToElement(activeLink.subLinks, '#subNavigationLinks');
  }
}

appendLinksToElement(navigationLinks, '#navigationLinks');
appendSubLinksOnLoad(navigationLinks);

// Tabs
const tabs = [
  {
    name: 'Default view',
    href: '#',
    current: true,
  },
  {
    name: 'Monthly view',
    href: '#',
    current: false,
  },
  {
    name: 'Quarterly view',
    href: '#',
    current: false,
  },
  {
    name: 'Yearly view',
    href: '#',
    current: false,
  },
];

function appendTabsToElement(tabs, elementId) {
  const element = document.querySelector(elementId);
  element.innerHTML = ''; // Clear existing links
  tabs.forEach((tab) => {
    const tabElement = document.createElement('a');
    tabElement.setAttribute('href', tab.href);
    tabElement.textContent = tab.name;
    tabElement.classList.add(
      'text-gray-600',
      'py-2',
      'px-4',
      'lg:text-sm',
      'text-xs',
      'rounded-md',
      'font-medium',
      'transition-all',
      'duration-300',
      'ease-in-out',
    );
    if (tab.current) {
      tabElement.classList.add(
        'bg-white',
        'text-gray-900',
        'border',
        'border-gray-200',
        'shadow-sm',
      );
    }
    element.appendChild(tabElement);
    tabElement.addEventListener('click', () => handleTabClick(tabs, tab));
  });
}

function handleTabClick(tabs, clickedTab) {
  tabs.forEach((tab) => {
    if (tab !== clickedTab) {
      tab.current = false;
    }
  });

  clickedTab.current = true;
  appendTabsToElement(tabs, '#tabsWrapper');
}

appendTabsToElement(tabs, '#tabsWrapper');

// Side bar
const sideBar = [
  {
    name: 'All Customers',
    href: '#',
    current: true,
    number: 2450,
  },
  {
    name: 'Current',
    href: '#',
    current: false,
    number: 1920,
  },
  {
    name: 'Churned',
    href: '#',
    current: false,
    number: 500,
  },
  {
    name: 'Reports',
    href: '#',
    current: false,
    number: 0,
  },
  {
    name: 'Saved reports',
    href: '#',
    current: false,
    number: 0,
  },
  {
    name: 'Archieved reports',
    href: '#',
    current: false,
    number: 0,
  },
  {
    name: 'Notifications',
    href: '#',
    current: false,
    number: 0,
  },
];
function appendSideBarToElement(sideBar, elementId) {
  const element = document.querySelector(elementId);
  element.innerHTML = ''; // Clear existing links
  sideBar.forEach((side) => {
    const sideElement = document.createElement('a');

    sideElement.setAttribute('href', side.href);
    sideElement.textContent = side.name;
    sideElement.classList.add(
      'text-gray-600',
      'text-sm',
      'font-medium',
      'transition-all',
      'duration-300',
      'ease-in-out',
      'flex',
      'items-center',
      'gap-2',
    );

    if (side.current) {
      sideElement.classList.add('bg-white', 'text-gray-900');
      const icon = document.createElement('i');
      icon.classList.add('fa-solid', 'fa-sparkle', 'text-sm');
      sideElement.prepend(icon);
    }

    if (side.number > 0) {
      const numberElement = document.createElement('span');
      numberElement.classList.add(
        'bg-gray-100',
        'text-gray-600',
        'text-xs',
        'font-semibold',
        'inline-block',
        'py-0.5',
        'px-2',
        'rounded-full',
      );
      numberElement.textContent = side.number.toLocaleString('en-US');
      sideElement.appendChild(numberElement);
    }

    element.appendChild(sideElement);
    sideElement.addEventListener('click', () => handleSideClick(sideBar, side));
  });
}

function handleSideClick(sideBar, clickedSide) {
  sideBar.forEach((side) => {
    if (side !== clickedSide) {
      side.current = false;
    }
  });

  clickedSide.current = true;
  appendSideBarToElement(sideBar, '#sideBarWrapper');
}

appendSideBarToElement(sideBar, '#sideBarWrapper');

const tableItems = [
  {
    logo: 'https://asset.brandfetch.io/iduDa181eM/idYYbqOlKi.png',
    name: 'Linear',
    url: 'Linear.app',
    type: 'Customer',
    typeColor: 'green',
    description: "The issue tracking tool you'll enjoy using",
    aboutHeader: 'Developer tools',
    rating: 4.5,
  },
  {
    logo: 'https://cdn-1.webcatalog.io/catalog/stripe/stripe-icon-filled-256.png?v=1679560235881',
    name: 'Stripe',
    url: 'Stripe.com',
    type: 'Failed',
    typeColor: 'red',
    description: 'Payment processing for the internet',
    aboutHeader: 'Financial tools',
    rating: 3,
  },
  {
    logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/webflow_logo_icon_169218.png',
    name: 'Webflow',
    url: 'Webflow.com',
    type: 'Customer',
    typeColor: 'green',
    description: 'Create a custom website + no-code website builder',
    aboutHeader: 'Web Development',
    rating: 4,
  },
  {
    logo: 'https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/004/060/original/Black_-_Squinge_1x.png?1562626224',
    name: 'Intercom',
    url: 'Intercom.com',
    type: 'Churned',
    typeColor: 'green',
    description: 'Customer messaging platform',
    aboutHeader: 'Customer engagement',
    rating: 1,
  },
  {
    logo: 'https://www.reworked.co/-/media/0c9041239143470a9a25b2838427a526.ashx',
    name: 'BaseCamp',
    url: 'Basecamp.com',
    type: 'Customer',
    typeColor: 'green',
    description: 'Project management software',
    aboutHeader: 'Project management',
    rating: 1,
  },
  {
    logo: 'https://s3-alpha.figma.com/hub/file/2966856926/2f4e4570-ef9e-4fbf-9cfc-4fb952c47385-cover.png',
    name: 'Figma',
    url: 'Figma.com',
    type: 'Customer',
    typeColor: 'green',
    description: 'Design and prototyping tool',
    aboutHeader: 'Design tools',
    rating: 5,
  },
];

function appendTableItemsToElement(tableItems, elementId) {
  const element = document.querySelector(elementId);
  element.innerHTML = ''; // Clear existing links
  tableItems.forEach((item) => {
    // Assuming you have a reference to the #tableItems div
    var tableItemsDiv = document.getElementById('tableItems');

    // Create the table item structure
    var tableItem = document.createElement('div');
    tableItem.className =
      'p-4 border-b border-gray-100 flex justify-between items-center';

    var innerDiv = document.createElement('div');
    innerDiv.className = 'flex items-center justify-start w-full';

    var checkboxDiv = document.createElement('div');
    checkboxDiv.className = 'w-1/12 hidden lg:block';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'border-gray-200 rounded-sm h-4 w-4';

    checkboxDiv.appendChild(checkbox);
    innerDiv.appendChild(checkboxDiv);

    var logoDiv = document.createElement('div');
    logoDiv.className = 'w-1/2 lg:w-2/12';

    var logoContainerDiv = document.createElement('div');
    logoContainerDiv.className = 'flex gap-3';

    var logoImageDiv = document.createElement('div');
    logoImageDiv.className =
      'h-10 w-10 rounded-full relative overflow-hidden bg-gray-100';

    var logoImage = document.createElement('img');
    logoImage.src = item.logo;
    logoImage.alt = 'Company logo';
    logoImage.className = 'object-cover object-center w-full h-full';

    logoImageDiv.appendChild(logoImage);
    logoContainerDiv.appendChild(logoImageDiv);

    var logoTextDiv = document.createElement('div');
    logoTextDiv.className = 'flex flex-col justify-center';

    var companyName = document.createElement('p');
    companyName.className = 'text-sm text-gray-800 font-medium mt-0';
    companyName.textContent = item.name;

    var companySubtitle = document.createElement('span');
    companySubtitle.className = 'text-xs text-gray-600 mt-0';
    companySubtitle.textContent = item.url;

    logoTextDiv.appendChild(companyName);
    logoTextDiv.appendChild(companySubtitle);
    logoContainerDiv.appendChild(logoTextDiv);

    logoDiv.appendChild(logoContainerDiv);
    innerDiv.appendChild(logoDiv);

    var statusDiv = document.createElement('div');
    statusDiv.className = 'lg:w-2/12 flex';

    var statusBadgeDiv = document.createElement('div');
    statusBadgeDiv.className = `flex items-center justify-start bg-${item.typeColor}-100 rounded-full gap-2 px-2 py-0.5`;

    var statusDotDiv = document.createElement('div');
    statusDotDiv.className = `h-1.5 w-1.5 rounded-full bg-${item.typeColor}-600`;

    var statusText = document.createElement('p');
    statusText.className = `text-xs text-${item.typeColor}-600 font-medium`;
    statusText.textContent = item.type;

    statusBadgeDiv.appendChild(statusDotDiv);
    statusBadgeDiv.appendChild(statusText);
    statusDiv.appendChild(statusBadgeDiv);
    innerDiv.appendChild(statusDiv);

    var descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'w-5/12 hidden lg:flex flex-col';

    var descriptionTitle = document.createElement('strong');
    descriptionTitle.className = 'text-sm font-medium text-gray-800';
    descriptionTitle.textContent = item.aboutHeader;

    var descriptionText = document.createElement('p');
    descriptionText.className = 'text-xs text-gray-600 mt-0';
    descriptionText.textContent = item.description;

    descriptionDiv.appendChild(descriptionTitle);
    descriptionDiv.appendChild(descriptionText);
    innerDiv.appendChild(descriptionDiv);

    var ratingDiv = document.createElement('div');
    ratingDiv.className = 'w-1/12 hidden lg:flex gap-2';

    //For loop to create x star icons based on rating and if there is a half add this <i class="fa-solid fa-star-half"></i>
    for (let i = 0; i < item.rating; i++) {
      var starIcon = document.createElement('i');
      starIcon.className = 'fa-solid fa-star text-gray-800';
      ratingDiv.appendChild(starIcon);
    }

    innerDiv.appendChild(ratingDiv);

    var ellipsisDiv = document.createElement('div');
    ellipsisDiv.className = ' flex-1 lg:w-1/12 text-right';

    var ellipsisText = document.createElement('p');
    ellipsisText.className = 'text-sm text-gray-400 font-medium cursor-pointer';

    var ellipsisIcon = document.createElement('i');
    ellipsisIcon.className =
      'fa-regular fa-ellipsis-vertical text-gray-600 group-hover:text-white transition-all duration-200 ease-in-out';

    ellipsisText.appendChild(ellipsisIcon);
    ellipsisDiv.appendChild(ellipsisText);
    innerDiv.appendChild(ellipsisDiv);

    tableItem.appendChild(innerDiv);
    tableItemsDiv.appendChild(tableItem);
  });
}

appendTableItemsToElement(tableItems, '#tableItems');
