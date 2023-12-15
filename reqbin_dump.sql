--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bins; Type: TABLE; Schema: public; Owner: appnotesuser
--

CREATE TABLE public.bins (
    id integer NOT NULL,
    url_path character varying(250) NOT NULL,
    time_creation timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.bins OWNER TO appnotesuser;

--
-- Name: bins_id_seq; Type: SEQUENCE; Schema: public; Owner: appnotesuser
--

CREATE SEQUENCE public.bins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.bins_id_seq OWNER TO appnotesuser;

--
-- Name: bins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: appnotesuser
--

ALTER SEQUENCE public.bins_id_seq OWNED BY public.bins.id;


--
-- Name: notes; Type: TABLE; Schema: public; Owner: appnotesuser
--

CREATE TABLE public.notes (
    id integer NOT NULL,
    content character(50),
    important boolean DEFAULT false
);


ALTER TABLE public.notes OWNER TO appnotesuser;

--
-- Name: notes_id_seq; Type: SEQUENCE; Schema: public; Owner: appnotesuser
--

CREATE SEQUENCE public.notes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.notes_id_seq OWNER TO appnotesuser;

--
-- Name: notes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: appnotesuser
--

ALTER SEQUENCE public.notes_id_seq OWNED BY public.notes.id;


--
-- Name: requests; Type: TABLE; Schema: public; Owner: appnotesuser
--

CREATE TABLE public.requests (
    id integer NOT NULL,
    time_of_request timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    http_method character varying(15) NOT NULL,
    http_path character varying(250) NOT NULL,
    mongo_id character varying(30) NOT NULL,
    ui_id character varying(30) NOT NULL,
    bin_id integer NOT NULL
);


ALTER TABLE public.requests OWNER TO appnotesuser;

--
-- Name: requests_id_seq; Type: SEQUENCE; Schema: public; Owner: appnotesuser
--

CREATE SEQUENCE public.requests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.requests_id_seq OWNER TO appnotesuser;

--
-- Name: requests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: appnotesuser
--

ALTER SEQUENCE public.requests_id_seq OWNED BY public.requests.id;


--
-- Name: bins id; Type: DEFAULT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.bins ALTER COLUMN id SET DEFAULT nextval('public.bins_id_seq'::regclass);


--
-- Name: notes id; Type: DEFAULT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.notes ALTER COLUMN id SET DEFAULT nextval('public.notes_id_seq'::regclass);


--
-- Name: requests id; Type: DEFAULT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.requests ALTER COLUMN id SET DEFAULT nextval('public.requests_id_seq'::regclass);


--
-- Data for Name: bins; Type: TABLE DATA; Schema: public; Owner: appnotesuser
--

COPY public.bins (id, url_path, time_creation) FROM stdin;
4	f76492be	2023-09-13 16:52:44.389888
5	9e975ee4	2023-09-13 16:54:58.546199
6	621f0eaa	2023-09-13 17:01:17.306265
7	5aead78b	2023-09-13 17:01:45.987219
8	f2a65db2	2023-09-13 17:01:53.996253
9	9f200bb2	2023-09-13 17:08:00.930585
10	c4d20f31	2023-09-13 17:08:31.16147
11	2b400078	2023-09-13 17:09:15.244699
13	f63c1adf	2023-09-13 17:11:12.603176
14	e1f51d4c	2023-09-13 17:12:20.771645
16	e372d113	2023-09-14 15:24:12.816404
20	ea1b6675	2023-09-14 19:18:38.471723
21	662e6c17	2023-09-14 19:21:50.77794
22	863d5159	2023-09-14 19:22:35.001251
23	1118d593	2023-09-14 19:22:55.618654
26	2a09b9f9	2023-09-15 10:43:48.094052
\.


--
-- Data for Name: notes; Type: TABLE DATA; Schema: public; Owner: appnotesuser
--

COPY public.notes (id, content, important) FROM stdin;
1	HTML is easy                                      	t
2	Browser can execute only JavaScript               	f
3	GET and POST are the most important methods       	f
\.


--
-- Data for Name: requests; Type: TABLE DATA; Schema: public; Owner: appnotesuser
--

COPY public.requests (id, time_of_request, http_method, http_path, mongo_id, ui_id, bin_id) FROM stdin;
35	2023-09-14 19:19:02.385587	POST	/f76492be	6503bf1602d8b641be54fe7a	dcef16c3	4
36	2023-09-14 19:19:03.384394	POST	/f76492be	6503bf1702d8b641be54fe7c	48cc03d1	4
37	2023-09-14 19:25:57.990921	POST	/1118d593	6503c0b587fb02416a3abc3c	0055a6d9	23
38	2023-09-14 19:25:58.9728	POST	/1118d593	6503c0b687fb02416a3abc3e	afde43d9	23
39	2023-09-14 19:29:01.128722	POST	/9e975ee4	6503c16df8b97fc13e4bb0a0	5286dd66	5
40	2023-09-14 19:29:02.310964	POST	/9e975ee4	6503c16ef8b97fc13e4bb0a2	d7cef489	5
41	2023-09-14 19:29:03.210572	POST	/9e975ee4	6503c16ff8b97fc13e4bb0a4	d9a1556f	5
44	2023-09-14 19:35:58.507983	POST	/f76492be	6503c30e14b1378cf091f86f	616f5445	4
45	2023-09-14 19:36:07.291823	POST	/f76492be	6503c31714b1378cf091f871	f01fdf72	4
46	2023-09-14 19:47:24.353565	POST	/621f0eaa	6503c5bce6fa41e474f123bc	2a479ab8	6
47	2023-09-14 19:47:26.38607	POST	/621f0eaa	6503c5bee6fa41e474f123be	aac6b010	6
48	2023-09-14 19:47:27.524013	POST	/621f0eaa	6503c5bfe6fa41e474f123c0	88f9518d	6
49	2023-09-14 19:47:28.569082	POST	/621f0eaa	6503c5c0e6fa41e474f123c2	8a2ea3b8	6
50	2023-09-14 19:51:58.128226	POST	/621f0eaa	6503c6ce2eccffdd232851b9	17134883	6
51	2023-09-14 19:52:34.922529	POST	/621f0eaa	6503c6f22eccffdd232851bb	ee32ee4e	6
52	2023-09-14 19:53:11.715254	POST	/621f0eaa	6503c7172eccffdd232851c0	8524c0a1	6
\.


--
-- Name: bins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: appnotesuser
--

SELECT pg_catalog.setval('public.bins_id_seq', 26, true);


--
-- Name: notes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: appnotesuser
--

SELECT pg_catalog.setval('public.notes_id_seq', 1, false);


--
-- Name: requests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: appnotesuser
--

SELECT pg_catalog.setval('public.requests_id_seq', 53, true);


--
-- Name: bins bins_pkey; Type: CONSTRAINT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.bins
    ADD CONSTRAINT bins_pkey PRIMARY KEY (id);


--
-- Name: notes notes_id_key; Type: CONSTRAINT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.notes
    ADD CONSTRAINT notes_id_key UNIQUE (id);


--
-- Name: requests requests_pkey; Type: CONSTRAINT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.requests
    ADD CONSTRAINT requests_pkey PRIMARY KEY (id);


--
-- Name: requests requests_bin_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: appnotesuser
--

ALTER TABLE ONLY public.requests
    ADD CONSTRAINT requests_bin_id_fkey FOREIGN KEY (bin_id) REFERENCES public.bins(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

