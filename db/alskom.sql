--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.18
-- Dumped by pg_dump version 9.5.18

-- Started on 2019-08-29 17:30:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2133 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 182 (class 1259 OID 17169)
-- Name: agent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.agent (
    id integer NOT NULL,
    "fullName" character varying(50) NOT NULL,
    phone character varying NOT NULL
);


ALTER TABLE public.agent OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 17167)
-- Name: agent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.agent_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.agent_id_seq OWNER TO postgres;

--
-- TOC entry 2134 (class 0 OID 0)
-- Dependencies: 181
-- Name: agent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.agent_id_seq OWNED BY public.agent.id;


--
-- TOC entry 186 (class 1259 OID 17191)
-- Name: branch; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.branch (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    address text NOT NULL,
    phone character varying NOT NULL
);


ALTER TABLE public.branch OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 17189)
-- Name: branch_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.branch_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.branch_id_seq OWNER TO postgres;

--
-- TOC entry 2135 (class 0 OID 0)
-- Dependencies: 185
-- Name: branch_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.branch_id_seq OWNED BY public.branch.id;


--
-- TOC entry 184 (class 1259 OID 17180)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    price character varying NOT NULL,
    "isActive" boolean NOT NULL
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 17178)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 2136 (class 0 OID 0)
-- Dependencies: 183
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 1996 (class 2604 OID 17172)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agent ALTER COLUMN id SET DEFAULT nextval('public.agent_id_seq'::regclass);


--
-- TOC entry 1998 (class 2604 OID 17194)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch ALTER COLUMN id SET DEFAULT nextval('public.branch_id_seq'::regclass);


--
-- TOC entry 1997 (class 2604 OID 17183)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 2120 (class 0 OID 17169)
-- Dependencies: 182
-- Data for Name: agent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.agent (id, "fullName", phone) FROM stdin;
2	fdsf	dsfsdfdsf
\.


--
-- TOC entry 2137 (class 0 OID 0)
-- Dependencies: 181
-- Name: agent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.agent_id_seq', 2, true);


--
-- TOC entry 2124 (class 0 OID 17191)
-- Dependencies: 186
-- Data for Name: branch; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.branch (id, name, address, phone) FROM stdin;
\.


--
-- TOC entry 2138 (class 0 OID 0)
-- Dependencies: 185
-- Name: branch_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.branch_id_seq', 1, false);


--
-- TOC entry 2122 (class 0 OID 17180)
-- Dependencies: 184
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, name, description, price, "isActive") FROM stdin;
1	rt	ytrytryrt	56	t
2	gjhhgj	ghj	8768	f
\.


--
-- TOC entry 2139 (class 0 OID 0)
-- Dependencies: 183
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 2, true);


--
-- TOC entry 2000 (class 2606 OID 17177)
-- Name: PK_1000e989398c5d4ed585cf9a46f; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.agent
    ADD CONSTRAINT "PK_1000e989398c5d4ed585cf9a46f" PRIMARY KEY (id);


--
-- TOC entry 2004 (class 2606 OID 17199)
-- Name: PK_2e39f426e2faefdaa93c5961976; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.branch
    ADD CONSTRAINT "PK_2e39f426e2faefdaa93c5961976" PRIMARY KEY (id);


--
-- TOC entry 2002 (class 2606 OID 17188)
-- Name: PK_bebc9158e480b949565b4dc7a82; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);


--
-- TOC entry 2132 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2019-08-29 17:30:33

--
-- PostgreSQL database dump complete
--

