<?xml version="1.0" encoding="utf-8"?>
<mcd>
  <MMLdefinition id="cds_eq"  cdrole="application" arity="nary">
    <name>eq</name>
    <description>
      <p>This n-ary function is used to indicate that two or more quantities are
      equal.  There must be at least two arguments.</p>
    </description>
    <discussion>
      <p>The <el>eq</el> element is the relational operator
      <quote>equals</quote>.</p>
      <p>As an n-ary operator, its operands may also be generated as described in <specref
      ref="contm_naryopwithqual"/> Therefore it may take qualifiers.
      </p>
    </discussion>
    <classification>nary relation</classification>
    <rendering>
      <p><graphic role="inline" source="image/f4053.gif" alt="a = b"/></p>
    </rendering>
    <signature>(real,real+) -> boolean</signature>
    <signature>(boolean, boolean+) -> boolean</signature>
    <signature>(set,set+) -> set</signature>
    <signature>(multiset,multiset+) -> multiset</signature>
    <signature> (domainofapp,function) -> boolean </signature>
    <signature> (bvar+,domainofapp,anything) -> boolean </signature>
    <property>
      <description><p>Symmetric</p></description>
    </property>
    <property>
      <description><p>Transitive</p></description>
    </property>
    <property>
      <description><p>Reflexive</p></description>
    </property>
    <MMLexample><![CDATA[<apply><eq/>
  <cn type="rational">2<sep/>4</cn><cn type="rational">1<sep/>2</cn>
</apply>]]></MMLexample>
    <MMLexample><![CDATA[<apply><eq/><ci type="set">A</ci><ci type="set">B</ci></apply>]]></MMLexample>
    <MMLexample><![CDATA[<apply><eq/><ci type="multiset">A</ci><ci type="multiset">B</ci></apply>]]></MMLexample>
    <MMLexample>
      <description><p>If this were tested at <var>a</var> = 5.5 and <var>b</var> = 6 it
      would yield the truth value <kw>false</kw>.</p>
      </description><![CDATA[<apply><eq/><ci> a </ci><ci> b </ci></apply>]]></MMLexample>
  </MMLdefinition>
      
  <MMLdefinition id="cds_neq"  cdrole="application" arity="2">
    <name>neq</name>
    <description>
      <p>This binary relation represents the relation "not equal to" which returns true
      unless the two arguments are equal.</p>
    </description>
    <discussion>
      <p>The <el>neq</el> element is the <quote>not equal to</quote> relational
      operator.</p>
    </discussion>
        <classification>function</classification>
	<rendering>
	  <p><graphic role="display" source="image/f4054.gif" alt="a \neq b"/></p>
	</rendering>
	<optype>binary vector operator</optype>
        <signature> (real,real) -> boolean </signature>
        <signature>(boolean,boolean) -> boolean</signature>
        <signature>(set,set) -> set</signature>
        <signature>(multiset,multiset) -> multiset</signature>
        <property>
          <description>
            <p> Symmetric</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><neq/><cn>3</cn><cn>4</cn></apply>]]></MMLexample>
		<MMLexample>
		<description>
        <p>If this were tested at <var>a</var> = 5.5 and <var>b</var> = 6 it would yield the truth value <kw>true</kw>.</p>
        </description>
		  <![CDATA[
			<apply>
			  <neq/>
			  <ci> a </ci>
			  <ci> b </ci>
			</apply>
			]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_gt"  cdrole="application" arity="nary">
        <name>gt</name>
        <description>
          <p>This n-ary function represents the relation "greater than" which returns true
          if each argument in turn is greater than the one following it.  There must be at
          least two arguments. </p>
        </description>
	<discussion>
	  <p>The <el>gt</el> element is the <quote>greater than</quote> relational
	  operator.</p>
	  <p>The <el>gt</el> element is an <emph>n-ary relation</emph>.  As an n-ary
	  operator, its operands may also be generated as described in <specref
	  ref="contm_naryopwithqual"/> Therefore it may take qualifiers.
	  </p>
	</discussion>
        <classification>function</classification>
	<rendering><p>
	  <graphic role="inline" source="image/f4055.gif" alt="a > b"/></p>
	</rendering>
	<signature>(real,real+) -> boolean </signature>
        <signature> (domainofapp,function) -> boolean </signature>
        <signature> (bvar+,domainofapp,algebraic) -> boolean </signature>
        <property>
          <description>
            <p>Transitive</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><gt/><cn>3</cn><cn>2</cn></apply>]]></MMLexample>
	<MMLexample>
	  <description>
	    <p>If this were tested at <var>a</var> = 5.5 and <var>b</var> = 6 it would
	    yield the truth value <kw>false</kw>.</p>
	  </description>
	<![CDATA[<apply><gt/><ci>a</ci><ci>b</ci></apply>]]></MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_lt" cdrole="application" arity="nary">
        <name>lt</name>
        <description>
          <p>This n-ary function represents the relation "less than" which returns true if
          each argument in turn is less than the one following it.  There must be at least
          two arguments. </p>
        </description>
	<discussion>
	  <p>The <el>lt</el> element is the <quote>less than</quote> relational
	  operator.</p>
	  <p>The <el>lt</el> element is an <emph>n-ary relation</emph>.  As an n-ary
	  operator, its operands may also be generated as described in <specref
	  ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
	<rendering><p>
	  <graphic role="inline" source="image/f4056.gif" alt="a &lt; b"/></p>
	</rendering>
	<signature>(real,real+) -> boolean </signature>
        <signature> ( domainofapp , function ) -> boolean </signature>
        <signature> ( bvar+ , domainofapp , algebraic) -> boolean </signature>
        <property>
          <description>
            <p>Transitive</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><lt/><cn>2</cn><cn>3</cn><cn>4</cn></apply>]]></MMLexample>
		<MMLexample>
		<description>
        <p>If this were tested at <var>a</var> = 5.5 and <var>b</var> = 6 it would yield the truth value <quote>true</quote>.</p>
        </description>
		<![CDATA[
		<apply>
		  <lt/>
		  <ci> a </ci>
		  <ci> b </ci>
		</apply>
		]]></MMLexample>
      </MMLdefinition>
     
	 <MMLdefinition id="cds_geq" cdrole="application" arity="nary">
        <name>geq</name>
        <description>
          <p>This element represents the n-ary greater than or equal to function.  which
          returns true if each argument in turn is greater than or equal to the one
          following it. . There must be at least two arguments. </p>
        </description>
	<discussion>
	  <p>The <el>geq</el> element is the relational operator <quote>greater than or
	  equal</quote>.</p>
	  <p>The <el>geq</el> element is an <emph>n-ary relation</emph>.  As an n-ary
	  operator, its operands may also be generated as described in <specref
	  ref="contm_naryopwithqual"/> Therefore it may take qualifiers.
	  </p>
	</discussion>
        <classification>function</classification>
	<rendering><p>
	  <graphic role="display" source="image/f4057.gif" alt="a \geq b"/></p>
	</rendering>
	<signature>(real,real+) -> boolean </signature>
        <signature> ( domainofapp , function ) -> boolean </signature>
        <signature> ( bvar+ , domainofapp , algebraic ) -> boolean </signature>
        <property>
          <description>
            <p>Transitive</p>
          </description>
        </property>
        <property>
          <description>
            <p>Reflexive</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><geq/><cn>4</cn><cn>3</cn><cn>3</cn></apply>]]></MMLexample>
		<MMLexample>
		<description>
        <p>If this were tested for <var>a</var> = 5.5 and <var>b</var> = 5.5 it would yield the truth value <kw>true</kw>.</p>
        </description>
		<![CDATA[
		<apply>
		  <geq/>
		  <ci> a </ci>
		  <ci> b </ci>
		</apply>
		]]></MMLexample>
      </MMLdefinition>
      
      <MMLdefinition id="cds_leq" cdrole="application" arity="nary">
        <name>leq</name>
        <description>
          <p>This n-ary function represents the relation "less than or equal to" which
          returns true if each argument in turn is less or equal to the one following
          it. There must be at least two arguments. </p>
        </description>
	<discussion>
	  <p>The <el>leq</el> element is the relational operator <quote>less than or
	  equal</quote>.</p>
	  <p>The <el>leq</el> element is an <emph>n-ary relation</emph>.  As an n-ary
	  operator, its operands may also be generated as described in <specref
	  ref="contm_naryopwithqual"/> Therefore it may take qualifiers.</p>
	</discussion>
        <classification>function</classification>
	<rendering><p>
	  <graphic role="display" source="image/f4058.gif" alt="a \leq b"/></p>
	</rendering>
        <signature>(real,real+) -> boolean </signature>
        <signature> ( domainofapp , function ) -> boolean </signature>
        <signature> ( bvar+ , domainofapp , arithmetic ) -> boolean </signature>
        <property>
          <description>
            <p>Transitive</p>
          </description>
        </property>
        <property>
          <description>
            <p>Reflexive</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><leq/><cn>3</cn><cn>3</cn><cn>4</cn></apply>]]></MMLexample>
		<MMLexample>
		<description>
        <p>If <var>a</var> = 5.4 and <var>b</var> = 5.5 this will yield the truth value <kw>true</kw>.</p>  
        </description>
		<![CDATA[
		<apply>
		  <leq/>
		  <ci> a </ci>
		  <ci> b </ci>
		</apply>
		]]></MMLexample>
      </MMLdefinition>
      	  <MMLdefinition id="cds_approx"  cdrole="application" arity="nary">
        <name>approx</name>
        <description>
          <p>This element is used to indicate that two or more quantities are
          approximately equal.  If a more precise definition of approximately equal is
          required the definintionURL should be used to identify a suitable
          definition.</p>
        </description>
	<discussion>
	  <p>The <el>approx</el> element is the relational operator <quote>approximately
	  equal</quote>. This is a generic relational operator and no specific arithmetic
	  precision is implied</p>

	</discussion>
        <classification>binary relation</classification>
        <MMLattribute>
          <attname>type</attname>
          <attvalue>MathMLType</attvalue>
          <attdefault>real</attdefault>
        </MMLattribute>
	<rendering><p>
	  <graphic source="image/f4060.gif" alt="\frac{22}{7} \approx \pi"/></p>
	</rendering>
        <signature>(real,real+) -> boolean </signature>
        <signature> (domainofapp,function) -> boolean </signature>
        <signature> (bvar+,domainofapp,boolean) -> boolean </signature>
        <property>
          <description>
            <p> Symmetric</p>
          </description>
        </property>
        <property>
          <description>
            <p>Transitive</p>
          </description>
        </property>
        <property>
          <description>
            <p>Reflexive</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply><approx/><pi/><cn type="rational">22<sep/>7</cn></apply>]]></MMLexample>
      </MMLdefinition>
      
</mcd>
