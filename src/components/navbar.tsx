import "./navbar.css"
import { useState, useRef, useEffect } from "react"

type NavItem = {
  name: string
  link?: string
  submenu?: { name: string; link: string }[]
}

const navItems: NavItem[] = [
  { name: "Produits", link: "/produits" },
  { name: "Poses et services", link: "/enseignements" },
  { name: "Cours et tutos", link: "/solutions" },
  { name: "Outil de conception", link: "/prise" },
  {
    name: "Nous contacter",
    submenu: [
      { name: "Contact", link: "/contact" },
      { name: "Newsletter", link: "/newsletter" },
      { name: "Mon compte", link: "/compte" },
      { name: "Panier", link: "/panier" },
      { name: "Mes listes", link: "/listes" },
    ],
  },
]

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function ClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", ClickOutside)
    return() => {
      document.removeEventListener("mousedown", ClickOutside)
    }
  }, [])

    return (
    <nav className="navbar">
      <ul className="menu">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="menu-item"
            ref={item.submenu ? menuRef : null}
          >
            {item.link && (
              <a href={item.link} className="link">
                {item.name}
              </a>
            )}

            {item.submenu && (
              <>
                <button
                  className="link contact-btn"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {item.name} ▼
                </button>

                {open && (
                  <ul className="dropdown">
                    {item.submenu.map((sub) => (
                      <li key={sub.name}>
                        <a href={sub.link} className="link">
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}