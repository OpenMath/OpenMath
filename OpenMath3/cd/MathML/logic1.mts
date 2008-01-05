<?xml version="1.0" encoding="utf-8"?>
<mcd>

      <MMLdefinition id="cds_and"  cdrole="application" arity="nary">
	<title>Conjunction</title>
        <name>and</name>
        <description>
          <p>This is the n-ary logical "and" operator.  It is used to construct the
          logical expression which were it to be evaluated would have a value of "true"
          when all of its operands have a truth value of "true", and "false"
          otherwise.</p>
        </description>
	<discussion>
	  <p>The <code>and</code> element is the Boolean <quote>and</quote> operator.</p>
	  <p>As an n-ary operator, its operands may also be generated as described
	  in<specref ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>boolean</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic role="display" source="image/f4039.gif" alt="a \land b"/></p>
	</rendering>
	<optype>n-ary operator</optype>
        <signature> (boolean*) -> boolean </signature>
        <property>
          <description>
            <p>ForAll( p, (true and p = p) )</p>
          </description><![CDATA[ ]]></property>
        <property>
          <description>
            <p>ForAll( [p,q], (p and q = q and p) ) </p>
          </description>
        </property>
        <property>
          <description>
            <p>x and not(x) = false</p>
          </description>
        </property>
        <MMLexample>
		<description>
            <p>If this were evaluated and both <var>a</var> and 
<var>b</var> had truth values of <attval>true</attval>, then the result would be <attval>true</attval>.</p>
          </description>
		<![CDATA[<apply><and/>
		  <ci>a</ci>
		  <ci>b</ci>
		  </apply>]]>
		</MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_or"  cdrole="application" arity="nary">
	<title>Disjunction</title>
        <name>or</name>
        <description>
          <p>The is the n-ary logical "or" operator.  The constructed expression has a
          truth value of true if at least one of its arguments is true.</p>
        </description>
	<discussion>
	  <p>The <code>or</code> element is the Boolean <quote>or</quote> operator.</p>
	  <p>As an n-ary operator, its operands may also be generated as described
	  in<specref ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>boolean</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic role="display" source="image/f4040.gif" alt="a \lor b"/></p>
	</rendering>
	<optype>n-ary operator</optype>
        <signature> (boolean*) -> boolean </signature>
        <signature> [type="boolean"](symbolic*) -> boolean </signature>
        <MMLexample><![CDATA[<apply>
  <or/>
  <ci> a </ci>
  <ci> b </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_xor"  cdrole="application" arity="nary">
	<title>Exclusive Disjunction</title>
        <name>xor</name>
        <description>
          <p>The is the n-ary logical "xor" operator.  The constructed expression
has a truth value of true if an odd number of its arguments
are true.</p>
        </description>
	<discussion>
	  <p>As an n-ary operator, its operands may also be generated as described
	  in<specref ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>boolean</attdefault>
        </MMLattribute>
	<rendering>
	  <p><graphic role="inline" source="image/f4041.gif" alt="a \xor b"/></p>
	</rendering>
	<optype>n-ary relation</optype>
        <signature> (boolean*) -> boolean </signature>
        <signature> [type="boolean"](symbolic*) -> symbolic </signature>
        <property>
          <description>
            <p>x xor x = false </p>
          </description>
        </property>
        <property>
          <description>
            <p>x xor not(x) = true </p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><xor/><ci>a</ci><ci>b</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_not"  cdrole="application" arity="1">
	<title>Negation</title>
        <name>not</name>
        <description>
          <p>This is the unary logical "not" operator.  It negates the truth value of its
          single argument.  e.g., not P is true when P is false and false when P is
          true.</p>
        </description>
	<discussion>
	  <p>The <code>not</code> operator is the Boolean<quote>not</quote> operator.</p>
	</discussion>
	<classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>boolean</attdefault>
        </MMLattribute>
	<rendering>
	  <graphic role="display" source="image/f4042.gif" alt="\neg a"/>
	</rendering>
	<optype>unary logical operator</optype>
        <signature> (boolean) -> boolean </signature>
        <signature> [type="boolean"](algebraic)  -> boolean </signature>
        <MMLexample><![CDATA[<apply><not/><ci>a</ci></apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_implies"  cdrole="application" arity="2">
	<title>Implication</title>
        <name>implies</name>
        <description>
          <p>This is the binary "implies" operator.  It is used to construct the logical
          expression "A implies B".</p>
        </description>
	<discussion>
	  <p>The <code>implies</code> element is the Boolean relational operator
	  <quote>implies</quote>.</p>
	</discussion>
        <classification>function</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>boolean</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic role = "display" source = "image/f4043.gif" alt = "A \Rightarrow B"/></p>
	</rendering>
	<optype>binary logical operator</optype>
        <signature> (boolean,boolean) -> boolean </signature>
        <property>
          <description>
            <p>false implies x 
</p>
          </description>
        </property>
        <MMLexample>
		<description>
           <p>Mathematical applications designed for the evaluation of such expressions would evaluate this to <attval>true</attval> when 
<var>a</var> = <attval>false</attval> and <var>b</var> = <attval>true</attval>.</p>
          </description>
		<![CDATA[<apply>
  <implies/>
  <ci> A </ci>
  <ci> B </ci>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_equivalent" cdrole="application" arity="nary">
        <name>equivalent</name>
        <description>
          <p>This element represents the n-ary logical equivalence function in which two
          boolean expressions are said to be equivalent if their truth values are equal
          for all choices of values of the boolean variables appearing in them.</p>
        </description>
	<discussion>
	  <p>The <el>equivalent</el> element is the <quote>equivalence</quote> relational
	  operator.</p>
	  <p>Its operands may be generated by allowing a function or expression to vary
	  over a domain of application. Therefore it may take qualifiers.</p>
	</discussion>
        <classification>nary relation</classification>
	<rendering><p>
	  <graphic source="image/f4059.gif" alt="a \equiv \neg(\neg a)"/></p>
	</rendering>
        <signature>(boolean,boolean+) -> boolean </signature>
        <signature> (domainofapp,function) -> boolean </signature>
        <signature> (bvar+,domainofapp,boolean) -> boolean </signature>
        <property>
          <description>
            <p> Symmetric </p>
          </description>
        </property>
        <property>
          <description>
            <p>Transitive </p>
          </description>
        </property>
        <property>
          <description>
            <p>Reflexive</p>
          </description>
        </property>
        <MMLexample>
		<description>
           <p>This yields the truth value <kw>true</kw> for all values of <var>a</var>.</p>
        </description>
		<![CDATA[
		<apply>
		  <equivalent/>
		  <ci> a </ci>
		  <apply>
		    <not/>
		    <apply> <not/> <ci> a </ci> </apply>
		  </apply>
		</apply>
		]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_true"  cdrole="constant">
        <name>true</name>
        <description>
          <p>true represents the logical constant for truth.</p>
        </description>
	<discussion>
	  <p><el>true</el> represents the logical constant for truth.</p>
	</discussion>
	<classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-true.gif" alt="\mbox{true} \lor\ P = \mbox{true}"/>
	</rendering>
        <signature>boolean</signature>
        <property>
          <description><p>not true = false</p>
          </description><![CDATA[
<apply><eq/>
  <apply><not/><true/></apply>
  <false/>
</apply>]]></property>
        <property>
          <description>
            <p>For all boolean p,  p or true is true</p>
          </description><![CDATA[
<declare type="boolean"><ci>p</ci></declare>
<apply><forall/>
  <bvar><ci>p</ci></bvar>
  <apply><eq/>
    <apply><or/><ci>p</ci><true/></apply>
    <true/>
  </apply>
</apply>
]]></property>
        <MMLexample><![CDATA[<apply> <eq/>
  <apply><or/>
    <true/>
    <ci type = "boolean">P</ci>
  </apply>
  <true/>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_false"  cdrole="constant">
        <name>false</name>
        <description>
          <p>false represents the logical constant for falsehood.</p>
        </description>
	<discussion>
	  <p><el>false</el> represents the logical constant for falsehood.</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-false.gif" alt="\mbox{false} \land\ P = \mbox{false}"/>
	</rendering>
        <signature>boolean</signature>
        <property>
          <description>
            <p>
not true = false</p>
          </description><![CDATA[
<apply><eq/>
  <apply><not/><true/></apply>
  <false/>
</apply>]]></property>
        <property>
          <description>
            <p>
p and false = false</p>
          </description><![CDATA[
<declare type="boolean"><ci>p</ci></declare>
<apply><forall/>
  <bvar><ci>p</ci></bvar>
  <apply><and/><ci>p</ci><false/></apply>
  <false/>
</apply>
]]></property>
        <MMLexample><![CDATA[<apply><eq/>
  <apply><and/>
    <false/>
    <ci type = "boolean">P</ci>
  </apply>
  <false/>
</apply>
]]></MMLexample>
      </MMLdefinition>
      
</mcd>
