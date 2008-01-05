<?xml version="1.0" encoding="utf-8"?>
<mcd>
	  <MMLdefinition id="cds_exponentiale" cdrole="constant">
        <name>exponentiale</name>
        <description>
          <p>exponentiale represents the mathematical constant which is the exponential
          base of the natural logarithms, commonly written e .  It is approximately
          2.718281828.. </p>
        </description>
	<discussion>
	  <p><el>exponentiale</el> represents the mathematical constant which is the
	  exponential base of the natural logarithms, commonly written <emph>e</emph>. It
	  is approximately 2.718281828..</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-exponentiale.gif" alt="\ln \eulere = 1"/>
	</rendering>
        <signature>real constant</signature>
        <property>
          <description><p>ln(e) = 1</p></description>
	  <![CDATA[<apply><eq/>
  <apply><ln/><exponentiale/></apply>
  <cn>1</cn>
</apply>]]></property>
        <property>
          <description>
            <p>e  is approximately 2.718281828</p>
          </description><![CDATA[<apply><approx/>
  <exponentiale/>
  <cn>2.718281828 </cn>
</apply>]]></property>
        <property>
          <description>
            <p>e = the sum as j ranges from 0 to infinity of 1/(j!)</p>
          </description>
        </property>
        <MMLexample><![CDATA[<apply> <eq/>
  <apply><ln/><exponentiale/></apply>
  <cn>1</cn>
</apply>
]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_imaginaryi"  cdrole="constant">
        <name>imaginaryi</name>
        <description>
          <p>imaginaryi represents the mathematical constant which is the square root of
          -1, commonly written i</p>
        </description>
	<discussion>
	  <p><el>imaginaryi</el> represents the mathematical constant which is the square
	  root of -1, commonly written <emph>i</emph>.</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-imaginaryi.gif" alt="\ii^2 = -1"/>
	</rendering>
        <signature>complex</signature>
        <property>
          <description>
            <p>sqrt(-1) = i</p>
          </description><![CDATA[
<apply><eq/>
  <imaginaryi/>
  <apply><root/><degree><cn>2</cn></degree><cn>-1</cn></apply>
</apply>]]></property>
        <MMLexample><![CDATA[<apply> <eq/>
  <apply><power/>
    <imaginaryi/>
    <cn>2</cn>
  </apply>
  <cn>-1</cn>
</apply>
]]></MMLexample>
      </MMLdefinition>
      <MMLdefinition id="cds_notanumber"  cdrole="constant">
        <name>notanumber</name>
        <description>
          <p>notanumber represents the result of an ill-defined floating point operation,
          sometimes also called NaN.</p>
        </description>
	<discussion>
	  <p><el>notanumber</el> represents the result of an ill-defined floating point
	  operation, sometimes also called <emph>NaN</emph>.</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-notanumber.gif" alt="0/0 = \mbox{NaN}"/>
	</rendering>
        <signature>undefined</signature>
        <MMLexample><![CDATA[<apply><eq/>
  <apply><divide/><cn>0</cn><cn>0</cn></apply>
  <notanumber/>
</apply>]]></MMLexample>
      </MMLdefinition>

      <MMLdefinition id="cds_pi"  cdrole="constant">
        <name>pi</name>
        <description>
          <p>pi represents the mathematical constant which is the ratio of a circle's 
circumference to its diameter, approximately 3.141592653.</p>
        </description>
	<discussion>
	  <p><el>pi</el> represents the mathematical constant which is the ratio of a
	  circle&apos;s circumference to its diameter, approximately 3.141592653.</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-pi.gif" alt="\pi \approx 22/7"/>
	</rendering>
        <signature>real</signature>
        <property><![CDATA[
<apply><approx/>
  <cn>pi</cn>
  <cn> 3.141592654 </cn>
</apply>
]]></property>
        <property>
          <description>
            <p>
pi = 4 * the sum as j ranges from 0 to infinity of ((1/(4j+1))-(1/(4j+3))) </p>
          </description><![CDATA[
]]></property>
        <MMLexample><![CDATA[<apply><approx/>
  <pi/>
  <cn type = "rational">22<sep/>7</cn>
</apply>
]]></MMLexample>
      </MMLdefinition>
 
      <MMLdefinition id="cds_eulergamma"  cdrole="constant">
        <name>eulergamma</name>
        <description>
          <p>A symbol to convey the notion of the gamma constant as defined in Abramowitz
          and Stegun, Handbook of Mathematical Functions, section 6.1.3. It is the limit
          of 1 + 1/2 + 1/3 + ... + 1/m - ln m as m tends to infinity, this is
          approximately 0.5772 15664. </p>
        </description>
	<discussion>
	  <p><el>eulergamma</el> represents Euler&apos;s constant, approximately
	  0.5772156649</p>
	</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-eulergamma.gif" alt="\gamma"/>
	</rendering>
        <signature>real</signature>
        <property>
          <description>
            <p>
gamma  is approx. 0.5772156649</p>
          </description><![CDATA[
<apply><approx/>
  <eulergamma/>
  <cn> .5772156649 </cn>
</apply>]]></property>
        <property>
          <description>
            <p>gamma = limit_(m -> infinity)(sum_(j ranges from 1 to m)(1/j) - ln m) </p>
          </description><![CDATA[
]]></property>
       <MMLexample><![CDATA[
	  <eulergamma/>]]></MMLexample> 
		<MMLexample><![CDATA[<apply><approx/>
  <eulergamma/>
  <cn>0.5772156649</cn>
</apply>]]></MMLexample>
      </MMLdefinition>
      
	  <MMLdefinition id="cds_infinity"  cdrole="constant">
        <name>infinity</name>
        <description>
          <p>Infinity.  Interpretation depends on the context.
The default value is the positive infinity used to extend the
real number line.  The "type" attribute can be use to indicate
that this is a "complex" infinity.</p>
        </description>
		<discussion>
			<p><el>infinity</el> represents the concept of
			infinity. Proper interpretation depends on context.</p>
		</discussion>
        <classification>constant </classification>
	<rendering>
	  <graphic role="display" source="image/new-infinity.gif" alt="\infty"/>
	</rendering>
	<signature>constant</signature>
        <property>
          <description>
            <p>
infinity/infinity is not defined.</p>
          </description><![CDATA[
<apply><eq/>
  <apply><divide/><infinity/><infinity/></apply>
  <notanumber/>
</apply>]]></property>
        <property>
          <description>
            <p>
for all reals x, x \lt infinity </p>
          </description><![CDATA[
<apply><forall/>
  <bvar><ci>n</ci></bvar>
  <condition><apply><in/><ci>n</ci><reals/></apply></condition>
  <apply><lt/><ci>n</ci><infinity/></apply>
</apply>]]></property>
        
<MMLexample><![CDATA[<infinity/>]]></MMLexample>
<MMLexample><![CDATA[<apply><eq/>
  <apply><limit/>
    <bvar><ci>x</ci></bvar>
    <condition><apply><tendsto/><ci>x</ci><infinity/></apply></condition>
    <apply><divide/><cn>1</cn><ci>x</ci></apply>
  </apply>
  <cn>0</cn>
</apply>]]></MMLexample>
      </MMLdefinition>
      
</mcd>
