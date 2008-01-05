<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition id="cds_set" cdrole="application" arity="nary" container="yes">
    <name>set</name>
    <description>
      <p>The set element is the container element that constructs a set of elements.  They
      may be explicitly listed, or defined by expressions or functions evaluated over a
      domain of application.  The domain of application may be given explicitly, or
      provided by means of one of the shortcut notations.</p>
    </description>
    <discussion>
      <p><ednote><name>MiKo</name>
      <edtext>Take the <el>list</el> and <el>set</el> parts of the discussion apart and
      make the <el>MMLdefinition</el>s selfcontained, maybe move some of the discussion
      into the CD description</edtext>
      </ednote>

      The <el>set</el> element is the container element that constructs a set of
      elements. The elements of a set can be defined either by explicitly listing the
      elements, or by evaluating a function over a domain of application as described in
      <specref ref="contm_qualifiers"/>.</p>

      <p>The <att>type</att> attribute indicates type of the set. Predefined values:
      <attval>normal</attval>, <attval>multiset</attval>.  <attval>multiset</attval>
      indicates that repetitions are allowed. The default value is
      <attval>normal</attval>.</p>

      <issue role="open" id="type_on_set">
	<head>Keep <att>type</att> attribute on <el>set</el>?</head>
	<p>It seems very awkward to keep this, it would probably be better to have an
	<code>multiset</code> content dictionary as OpenMath does.</p>
      </issue>

      <p>The child elements of a possibly empty <el>list</el> element are the actual
      components of an ordered <emph>list</emph>. For example, an ordered list of the
      three symbols <var>a</var>, <var>b</var>, and <var>c</var> is encoded as

      <eg role="mathml"><![CDATA[<list><ci>a</ci><ci>b</ci><ci>c</ci></list>]]></eg>
	
      Sets and lists can also be constructed by evaluating a function over a domain of
      application, each evaluation corresponding to a term of the set or list.  In the
      most general form a domain is explicitly specified by a <el>domainofapplication</el>
      element together with optional <el>bvar</el> elements.  Qualifications involving a
      <el>domainofapplication</el> element can be abbreviated in several ways as described
      in <specref ref="contm_qualifiers"/>.  For example, a <el>bvar</el> and a
      <el>condition</el> element can be used to define lists where membership depends on
      satisfying certain conditions.</p>

      <p>An <att>order</att> attribute can be used to specify what ordering is to be
      used. When the nature of the child elements permits, the ordering defaults to a
      numeric or lexicographic ordering.</p>
	
      <p>Sets are structured much the same as lists except that there is no implied
      ordering and the <att>type</att> of set may be <attval>normal</attval> or
      <attval>multiset</attval> with <attval>multiset</attval> indicating that repetitions
      are allowed.</p>
	
      <p>For both sets and lists, the child elements must be valid MathML content
      elements. The type of the child elements is not restricted. For example, one might
      construct a list of equations, or of inequalities.</p>
	
      <p>The child elements of a possibly empty <el>list</el> element are the actual
      components of an ordered <emph>list</emph>. For example, an ordered list of the
      three symbols <var>a</var>, <var>b</var>, and <var>c</var> is encoded as

      <eg role="mathml"><![CDATA[<list><ci>a</ci><ci>b</ci><ci>c</ci></list>]]></eg>
      
      Sets and lists can also be constructed by evaluating a function over a domain of
      application, each evaluation corresponding to a term of the set or list.  In the
      most general form a domain is explicitly specified by a <el>domainofapplication</el>
      element together with optional <el>bvar</el> elements.  Qualifications involving a
      <el>domainofapplication</el> element can be abbreviated in several ways as described
      in <specref ref="contm_qualifiers"/>.  For example, a <el>bvar</el> and a
      <el>condition</el> element can be used to define lists where membership depends on
      satisfying certain conditions.</p>

      <p>An <att>order</att> attribute can be used to specify what ordering is to be
      used. When the nature of the child elements permits, the ordering defaults to a
      numeric or lexicographic ordering.</p>
	
      <p>Sets are structured much the same as lists except that there is no implied
      ordering and the <att>type</att> of set may be <attval>normal</attval> or
      <attval>multiset</attval> with <attval>multiset</attval> indicating that repetitions
      are allowed.</p>
	
      <p>For both sets and lists, the child elements must be valid MathML content
      elements. The type of the child elements is not restricted. For example, one might
      construct a list of equations, or of inequalities.</p>
    </discussion>
    <classification>constructor</classification>
    
    <MMLattribute>
      <attname>order</attname>
      <attvalue> lexicographic | numeric </attvalue>
      <attdefault>none</attdefault>
    </MMLattribute>
    <rendering><ulist>
      <item><p>
      <graphic role="inline" source="image/f4076.gif" alt="[ a, b, c ]"/></p></item>
      <item><p>
      <graphic role="inline" source="image/f4077.gif" alt="[ x \mid x &lt; 5 ]"/></p></item>
    </ulist>
    </rendering>
    <signature> (anything*) -> list </signature>
    <signature>[order=ordering](anything*) -> list </signature>
        <signature>(domainofapp,function) -> list </signature>
        <signature>(bvar+,domainofapp,anything) -> list </signature>
        <signature>[order=ordering](domainofapp,function) -> list(ordering) </signature>
        <signature>[order=ordering](bvar*,domainofapp,anything) -> list(ordering) </signature>
        <MMLexample><![CDATA[<list><ci>a</ci><ci>b</ci><ci>c</ci></list>]]></MMLexample>
        <MMLexample><![CDATA[<list order="numeric">
  <bvar><ci>x</ci></bvar>
  <condition>
    <apply><lt/><ci>x</ci><cn>5</cn></apply>
  </condition>
</list>
]]></MMLexample>
      </MMLdefinition>
      
  <MMLdefinition id="cds_union" cdrole="application" arity="union">
        <name>union</name>
        <description>
          <p>This is the set-theoretic operation of union of sets.  This n-ary operator
          generalizes to operations on multisets by tracking the frequency of occurrence
          of each element in the union. As an n-ary operation the operands can be
          generated by allowing a function or expression to range over the elements of a
          domain of application.  Thus it accepts qualifiers.</p>
	</description>
	<discussion>
	  <p>The <el>union</el> element is the operator for a set-theoretic union or join
	  of two (or more) sets.  The operands are usually listed explicitly.</p>
	  
	  <p>As an n-ary operator, its operands may also
	  be generated as described in <specref ref="contm_naryopwithqual"/> Therefore it
	  may take qualifiers.</p>
	</discussion>
        <classification>nary set function</classification>
	<rendering>
	  <graphic role="display" source="image/f4078.gif" alt="A \cup B"/>
	  <graphic role="display" source="image/f4078b.gif" alt="\bigcup_{S\in L} S"/>
	</rendering>
	<signature> (set*) -> set </signature>
        <signature> (multiset*) -> multiset </signature>
        <signature> (domainofapp, set_valued_function) -> set </signature>
        <signature> (bvar+,domainofapp,set_valued_expression) -> set</signature>
        <signature> (domainofapp, multiset_valued_function) -> multiset </signature>
        <signature> (bvar+,domainofapp,multiset_valued_expression) -> multiset</signature>
        <MMLexample><![CDATA[<apply><union/>
  <ci> A </ci>
  <ci> B </ci>
</apply>
]]></MMLexample>
		<MMLexample><![CDATA[
		<apply>
		  <union/>
		  <bvar><ci type="set"> S </ci></bvar>
		  <domainofapplication><ci type="list">L</ci></domainofapplication>
		  <ci type="set"> S </ci>
		</apply>
		]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_intersect" cdrole="application" arity="nary">
        <name>intersect</name>
        <description>
          <p> This n-ary operator indicates the intersection of two sets.  If the two sets
          are multisets, the result is a multiset. in which each element is present with a
          repetition determined by the smallest number of occurrences in any of the sets
          (multisets) that occur as arguments.</p>
        </description>
	<discussion>
	  <p>The <el>intersect</el> element is the operator for the set-theoretic
	  intersection or meet of two (or more) sets.  The operands are usually listed
	  explicitly.</p>
	  <p>As an n-ary operator, its operands may also be generated as described in
	  <specref ref="contm_naryopwithqual"/> Therefore it may take qualifiers.
	  </p>
	</discussion>
        <classification>nary function</classification>
	<rendering>
	  <graphic role="display" source="image/f4079.gif" alt="A \cap B"/>
	  <graphic role="display" source="image/f4079b.gif" alt="\bigcap_{S\in L} S"/>
	</rendering>
	<signature> (set*) -> set </signature>
        <signature> (multiset*) -> multiset </signature>
        <signature> (domainofapp, set_valued_function) -> set </signature>
        <signature> (bvar+,domainofapp,set_valued_expression) -> set</signature>
        <signature> (domainofapp, multiset_valued_function) -> multiset </signature>
        <signature> (bvar+,domainofapp,multiset_valued_expression) -> multiset</signature>
        <MMLexample><![CDATA[<apply><intersect/>
  <ci type="set"> A </ci>
  <ci type="set"> B </ci>
</apply>
]]></MMLexample>
<MMLexample><![CDATA[
<apply>
  <intersect/>
  <bvar><ci type="set"> S </ci></bvar>
  <domainofapplication><ci type="list">L</ci></domainofapplication>
  <ci type="set"> S </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_in" cdrole="application" arity="2">
        <name>in</name>
        <description>
          <p>The in element is the relational operator used for a set-theoretic inclusion
          ('is in' or 'is a member of').</p>
        </description>
	<discussion>
	  <p>The <el>in</el> element is the relational operator used for a set-theoretic
	  inclusion (<quote>is in</quote> or <quote>is a member of</quote>).</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4080.gif" alt="a \in A"/>
	</rendering>
<optype>binary relation</optype>
        <signature> (anything,set) -> boolean </signature>
        <signature> (anything,multiset) -> boolean </signature>
        <MMLexample><![CDATA[<apply><in/>
  <ci> a </ci>
  <ci type="set"> A </ci>
</apply>]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_notin" cdrole="application" arity="2">
        <name>notin</name>
        <description>
          <p>The notin element is the relational operator element used 
to construct set-theoretic exclusion ('is not in' or 'is not a member of').</p>
	</description>
	<discussion>
	  <p>The <el>notin</el> element is the relational operator element used for
	  set-theoretic exclusion (<quote>is not in</quote> or <quote>is not a member
	  of</quote>).</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4081.gif" alt="a \notin A"/>
	</rendering>
	<optype>binary relation</optype>
        <signature> (anything,set) -> boolean </signature>
        <signature> (anything,multiset) -> boolean </signature>
        <MMLexample><![CDATA[<apply><notin/>
  <ci> a </ci>
  <ci type="set"> A </ci>
</apply>]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_subset" cdrole="application" arity="nary">
        <name>subset</name>
        <description>
          <p>The subset element is the n-ary relational operator element for a
          set-theoretic containment ('is a subset of').</p>
	</description>
	<discussion>
	  <p>The <el>subset</el> element is the relational operator element for a
	  set-theoretic containment (<quote>is a subset of</quote>).</p>
	  <p>The <el>subset</el> element is an <emph>n-ary set relation</emph>.  As an
	  n-ary operator, its operands may also be generated as described in <specref
	  ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4082.gif" alt="A \subseteq B"/>
	</rendering>
        <signature> (set*) -> boolean </signature>
        <signature> (multiset*) -> boolean </signature>
        <signature> (domainofapp,function) -> boolean </signature>
        <signature> (bvar+,domainofapp,algebraic) -> boolean </signature>
        <MMLexample><![CDATA[<apply><subset/>
  <ci type="set"> A </ci>
  <ci type="set"> B </ci>
</apply>
]]></MMLexample>
        <MMLexample><![CDATA[<apply>
  <subset/>
  <subset/>
  <bvar><ci type="set">S</ci></bvar>
  <condition>
    <apply><in/>
      <ci>S</ci>
      <ci type="list">T</ci>
    </apply>
  </condition>
  <ci>S</ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_prsubset" cdrole="application" arity="nary">
        <name>prsubset</name>
        <description>
          <p>The <el>prsubset</el> element is the n-ary relational operator element for
          set-theoretic proper containment ('is a proper subset of').</p>
        </description>
	<discussion>
	  <p>The <el>prsubset</el> element is the relational operator element for
	  set-theoretic proper containment (<quote>is a proper subset of</quote>).</p>
	  <p>The <el>prsubset</el> element is an <emph>n-ary set relation</emph>.  As an
	  n-ary operator, its operands may also be generated as described in <specref
	  ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4083.gif" alt="A \subset B"/>
	</rendering>
        <signature> (set*) -> boolean </signature>
        <signature> (multiset*) -> boolean </signature>
        <signature> (domainofapp,function) -> boolean </signature>
        <signature> (bvar+,domainofapp,boolean) -> boolean </signature>
        <MMLexample><![CDATA[<apply><prsubset/>
  <ci type="set"> A </ci>
  <ci type="set"> B </ci>
</apply>
]]></MMLexample>
        <MMLexample><![CDATA[<apply>
  <prsubset/>
  <bvar><ci type="integer">i</ci></bvar>
  <lowlimit><cn>0</cn></lowlimit>
  <uplimit><cn>10</cn></uplimit>
  <apply><selector/>
    <ci type="vector_of_sets">S</ci>
    <ci>i</ci>
  </apply>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_notsubset" cdrole="application" arity="2">
        <name>notsubset</name>
        <description>
          <p>The notsubset element is the relational operator element for the 
set-theoretic relation 'is not a subset of'.</p>
        </description>
	<discussion>
	  <p>The <el>notsubset</el> element is the relational operator element for the
	  set-theoretic relation <quote>is not a subset of</quote>.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4084.gif" alt="A \nsubseteq B"/>
	</rendering>
	<optype>binary relation</optype>
	<signature> (set, set) -> boolean </signature>
        <signature> (multiset,multiset) -> boolean </signature>
        <MMLexample><![CDATA[<apply><notsubset/>
  <ci type="set"> A </ci>
  <ci type="set"> B </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_notprsubset" cdrole="application" arity="2">
        <name>notprsubset</name>
        <description>
          <p>The notprsubset element is the element for constructing the set-theoretic
          relation 'is not a proper subset of'.</p>
        </description>
	<discussion>
	  <p>The <el>notprsubset</el> element is the operator element for the
	  set-theoretic relation <quote>is not a proper subset of</quote>.</p>
	</discussion>
        <classification>function</classification>
	<rendering>
	  <graphic role="display" source="image/f4085.gif" alt="A \not\subset B"/>
	</rendering>
	<optype>binary relation</optype>
        <signature> (set,set) -> boolean </signature>
        <signature> (multiset,multiset) -> boolean </signature>
        <MMLexample><![CDATA[<apply><notprsubset/>
  <ci type="set"> A </ci>
  <ci type="set"> B </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
     
      <MMLdefinition id="cds_setdiff" cdrole="application" arity="2">
        <name>setdiff</name>
        <description>
          <p>The setdiff element is the operator element for a set-theoretic difference of
          two sets.</p>
        </description>
	<discussion>
	  <p>The <el>setdiff</el> element is the operator element for a set-theoretic
	  difference of two sets.</p>
	</discussion>
        <classification>binary set function</classification>
	<rendering>
	  <graphic role="display" source="image/f4086.gif" alt="A \setminus B"/>
	</rendering>
	<signature> (set,set) -> set </signature>
        <signature> (multiset,multiset) -> multiset </signature>
        <MMLexample><![CDATA[<apply><setdiff/>
  <ci type="set"> A </ci>
  <ci type="set"> B </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_card" cdrole="application" arity="1">
        <name>card</name>
        <description>
          <p>The card element is the operator element for deriving the size or cardinality
          of a set.  The size of a multset is simply the total number of elements in the
          multiset.</p>
        </description>
	<discussion>
	  <p>The <el>card</el> element is the operator element for the size or cardinality
	  of a set.</p>
	</discussion>
        <classification>unary function</classification>
	<rendering>
	  <graphic role="display" source="image/f4087.gif" alt="| A | = 5"/>
	</rendering>
	<signature> (set) -> scalar </signature>
        <signature> (multiset) -> scalar </signature>
        <MMLexample>
		<description><p>where A is a set with 5 elements.</p>
		</description>
		<![CDATA[<apply><eq/>
  <apply><card/><ci> A </ci></apply>
  <ci> 5 </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_cartesianproduct" cdrole="application" arity="nary">
        <name>cartesianproduct</name>
        <description>
          <p>The cartesianproduct element is the operator for a set-theoretic 
cartesian product of two (or more) sets.  The cartesian 
product of multisets produces a multiset since n-tuples
may be repeated if elements in the base sets are repeated.</p>
        </description>
	<discussion>
	  <p>The <el>cartesianproduct</el> element is the operator element for the
	  Cartesian product of two or more sets. If <var>A</var> and <var>B</var> are two
	  sets, then the Cartesian product of <var>A</var> and <var>B</var> is the set of
	  all pairs <var>(a,b)</var> with <var>a</var> in <var>A</var> and <var>b</var> in
	  <var>B</var>. </p>
	  
	  <p>As an n-ary operator, its operands may also be generated as described in
	  <specref ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
	<classification>nary function</classification>
	<rendering>
	  <graphic role="display" source="image/cartesianproduct1.gif" alt="A \times B"/>
	  <graphic role="display" source="image/cartesianproduct2.gif" alt="\mathbb{R} \times \mathbb{R} \times \mathbb{R}"/>
	  <graphic role="display" source="image/cartesianproduct3.gif" alt="\mathbb{R}^3"/>
	</rendering>
        <signature> (set*) -> set </signature>
        <signature> (multiset*) -> multiset </signature>
        <MMLexample><![CDATA[<apply><cartesianproduct/><ci>A</ci><ci>B</ci></apply>]]></MMLexample>
        <MMLexample><![CDATA[<apply><cartesianproduct/><reals/><reals/><reals/></apply>]]></MMLexample>
      </MMLdefinition>
	  <MMLdefinition id="cds_emptyset"  cdrole="constant">
        <name>emptyset</name>
        <description>
          <p>emptyset represents the empty set.</p>
        </description>
	<discussion>
	  <p><el>emptyset</el> represents the empty set.</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-emptyset.gif" alt="\mathbb{Z} \neq \emptyset"/>
	</rendering>
        <signature>set</signature>
        <property>
          <description>
            <p>
for all sets S,   intersect(S,emptyset) = emptyset</p>
          </description><![CDATA[
<apply><forall/><bvar><ci type="set">S</ci></bvar>
  <apply><eq/>
    <apply><intersect/><emptyset/><ci>S</ci></apply>
    <emptyset/>
  </apply>
</apply>]]></property>
        <MMLexample><![CDATA[<apply><neq/>
  <integers/>
  <emptyset/>
</apply>
]]></MMLexample>
      </MMLdefinition>



</mcd>
